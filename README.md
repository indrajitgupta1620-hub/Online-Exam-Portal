# Online Exam Portal

A simple, clean, and professional Online Exam Portal built using HTML, CSS, JavaScript, and Bootstrap. This is a frontend-only application with no backend or database requirements.

## 📋 Features

### ✅ Login Page
- User login with USN Number and Date of Birth
- Form validation
- Clean and minimal UI

### ✅ Rules Page
- Display of 6 comprehensive exam rules
- Clear instructions before starting the exam
- "Start Exam" button to proceed

### ✅ Exam Page
- 6 multiple-choice questions (MCQs) with 4 options each
- 2-minute countdown timer
- Auto-submit when timer reaches zero
- Manual submit button
- Visual warning when time is running out (last 30 seconds)
- Prevention of accidental page refresh

### ✅ Result Page
- Success message upon exam completion
- Display of completion date (DD/MM/YYYY format)
- Display of completion time (12-hour format with AM/PM)
- No score display (as per requirements)

## 🗂️ File Structure

```
online-exam-portal/
│
├── index.html          # Login page
├── rules.html          # Exam rules page
├── exam.html           # Exam page with questions
├── result.html         # Result display page
├── style.css           # Custom styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation (this file)
```

## 🚀 How to Run

1. **Download all files** to a single folder
2. **Open `index.html`** in any modern web browser
3. **Follow the workflow**:
   - Login Page → Rules Page → Exam Page → Result Page

## 💻 Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and layout
- **JavaScript (ES6)** - Functionality and interactivity
- **Bootstrap 5.3** - Responsive design and components

## 📱 Responsive Design

The portal is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Key Functionalities

### Login System
- Validates that both USN and Date of Birth fields are filled
- Stores user data in sessionStorage
- Redirects to rules page upon successful login

### Timer System
- Starts automatically when exam page loads
- Counts down from 2 minutes (120 seconds)
- Updates every second
- Changes color and pulses in the last 30 seconds
- Auto-submits exam when timer reaches zero

### Exam Submission
- Manual submission via "Submit Exam" button
- Automatic submission when time expires
- Stores answers in sessionStorage (for future use)
- Redirects to result page after submission

### Result Display
- Shows current date and time dynamically
- Uses JavaScript Date object for accuracy
- Formats date as DD/MM/YYYY
- Formats time as HH:MM:SS AM/PM

## 🎨 Design Features

- Clean white background (as required)
- Professional color scheme
- Smooth transitions and hover effects
- Clear visual hierarchy
- Accessible form controls
- Responsive button styling
- Card-based layout for better content organization

## 📝 Code Structure

### HTML Files
- Semantic HTML5 structure
- Bootstrap grid system for layout
- Accessible form elements
- Clear commenting

### CSS (style.css)
- CSS custom properties (variables) for theming
- Modular, reusable classes
- Responsive media queries
- Clean and organized structure
- Well-commented sections

### JavaScript (script.js)
- Event-driven architecture
- Separate functions for each feature
- DOM manipulation
- Timer management
- Date/time formatting
- Session storage handling
- Page-specific initialization

## 🔧 Customization Options

### Changing Timer Duration
Edit `script.js`, line 33:
```javascript
let timeRemaining = 120; // Change value in seconds
```

### Adding More Questions
Edit `exam.html` and add new question containers following the existing pattern.

### Modifying Color Scheme
Edit `style.css`, lines 8-19 (CSS variables):
```css
:root {
    --primary-color: #2c3e50;    /* Change colors here */
    --secondary-color: #3498db;
    /* ... other colors ... */
}
```

## 🎓 Learning Outcomes

This project helps MCA students understand:
- Frontend web development basics
- DOM manipulation with JavaScript
- Event handling
- Timer implementation
- Form validation
- Page navigation without routing
- Responsive design principles
- Bootstrap framework usage
- Session storage API
- Date and time handling in JavaScript

## 📌 Important Notes

1. **No Backend**: This is a pure frontend application. Data is not persisted beyond the browser session.
2. **No Authentication**: Login validation is basic and for demonstration purposes only.
3. **No Score Calculation**: Result page only shows completion status, date, and time.
4. **Browser Compatibility**: Works best in modern browsers (Chrome, Firefox, Edge, Safari).
5. **Session Storage**: Uses browser's sessionStorage to temporarily store data during the session.

## 🐛 Known Limitations

- No actual answer validation or score calculation
- No database integration
- No user account management
- Timer is client-side only (can be manipulated in browser console)
- No server-side validation

## 📄 License

This is an educational project free to use for learning purposes.

## 🤝 Contributing

This is a learning project. Feel free to:
- Enhance the UI/UX
- Add more features
- Improve the code structure
- Fix any bugs you encounter

## 📞 Support

For issues or questions, please refer to the code comments or reach out to your instructor.

---

**Note**: This project is designed for educational purposes and should not be used for production environments without proper backend implementation and security measures.
