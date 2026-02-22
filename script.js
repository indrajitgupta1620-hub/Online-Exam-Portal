/* ===================================
   Online Exam Portal - JavaScript
   Handles navigation, timer, and logic
   =================================== */

// ===== LOGIN PAGE FUNCTIONALITY =====
function handleLogin(event) {
    event.preventDefault();
    
    // Get form values
    const usn = document.getElementById('usn').value.trim();
    const dob = document.getElementById('dob').value;
    
    // Basic validation
    if (usn === '' || dob === '') {
        alert('Please fill in all fields!');
        return false;
    }
    
    // Store user data in sessionStorage (optional, for potential future use)
    sessionStorage.setItem('usn', usn);
    sessionStorage.setItem('dob', dob);
    
    // Redirect to rules page
    window.location.href = 'rules.html';
}

// ===== RULES PAGE FUNCTIONALITY =====
function startExam() {
    // Redirect to exam page
    window.location.href = 'exam.html';
}

// ===== EXAM PAGE FUNCTIONALITY =====

// Timer variables
let timeRemaining = 120; // 2 minutes in seconds
let timerInterval;

// Initialize exam page
function initExam() {
    // Start the timer
    startTimer();
    
    // Add submit button handler
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitExam);
    }
    
    // Prevent page refresh warning
    window.addEventListener('beforeunload', function(e) {
        // Cancel the event
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = '';
    });
}

// Timer function
function startTimer() {
    const timerDisplay = document.getElementById('timer');
    
    timerInterval = setInterval(function() {
        timeRemaining--;
        
        // Calculate minutes and seconds
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        // Format time display
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerDisplay.textContent = formattedTime;
        
        // Change color when time is running out (last 30 seconds)
        if (timeRemaining <= 30) {
            timerDisplay.parentElement.style.backgroundColor = '#c0392b';
            timerDisplay.parentElement.style.animation = 'pulse 1s infinite';
        }
        
        // When time is up
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmitExam();
        }
    }, 1000);
}

// Submit exam function
function submitExam() {
    // Clear the timer
    clearInterval(timerInterval);
    
    // Get all selected answers (optional - for future use)
    const answers = [];
    const questions = document.querySelectorAll('.question-container');
    
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        answers.push({
            question: index + 1,
            answer: selectedOption ? selectedOption.value : 'Not Answered'
        });
    });
    
    // Store answers in sessionStorage (optional)
    sessionStorage.setItem('examAnswers', JSON.stringify(answers));
    
    // Store completion time
    const completionDate = new Date();
    sessionStorage.setItem('completionDate', completionDate.toISOString());
    
    // Redirect to results page
    window.location.href = 'result.html';
}

// Auto submit when timer ends
function autoSubmitExam() {
    alert('Time is up! Your exam will be submitted automatically.');
    submitExam();
}

// ===== RESULT PAGE FUNCTIONALITY =====
function displayResults() {
    const completionDateElement = document.getElementById('completionDate');
    const completionTimeElement = document.getElementById('completionTime');
    
    // Get completion date from sessionStorage
    let completionDate;
    const storedDate = sessionStorage.getItem('completionDate');
    
    if (storedDate) {
        completionDate = new Date(storedDate);
    } else {
        // If no stored date, use current date
        completionDate = new Date();
    }
    
    // Format date (DD/MM/YYYY)
    const day = String(completionDate.getDate()).padStart(2, '0');
    const month = String(completionDate.getMonth() + 1).padStart(2, '0');
    const year = completionDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    // Format time (HH:MM:SS AM/PM)
    let hours = completionDate.getHours();
    const minutes = String(completionDate.getMinutes()).padStart(2, '0');
    const seconds = String(completionDate.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    
    // Display date and time
    completionDateElement.textContent = formattedDate;
    completionTimeElement.textContent = formattedTime;
}

// ===== PAGE INITIALIZATION =====

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Determine which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            // Login page - add form submit handler
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', handleLogin);
            }
            break;
            
        case 'rules.html':
            // Rules page - add start exam button handler
            const startBtn = document.getElementById('startExamBtn');
            if (startBtn) {
                startBtn.addEventListener('click', startExam);
            }
            break;
            
        case 'exam.html':
            // Exam page - initialize exam
            initExam();
            break;
            
        case 'result.html':
            // Result page - display results
            displayResults();
            break;
    }
});

// Add pulse animation dynamically for timer warning
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);
