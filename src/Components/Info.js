import React, { useEffect,useState } from 'react'
import './info.css';
function Info() {
  return (
    <div className='info-main-div'>
        <p className='info-paragraph'>
            <h1>Welcome to Forest Fingers</h1> 
            <br />
                <h2>About Forest Fingers:</h2>
                    <p>Forest Fingers is an engaging and educational web application designed to help you improve your typing speed and accuracy. Whether you're a student, a professional, or simply interested in enhancing your keyboarding skills, our platform offers a fun and effective way to test and develop your typing abilities.</p>


                    <br />
                <h2>Features:</h2>

                    <h3>Typing Speed Test:</h3> <p>Forest Fingers provides a user-friendly typing test that challenges you to type a given set of words or sentences as accurately and quickly as possible.</p>

                    <h3>Real-time Feedback:</h3> <p>As you type, you'll receive real-time feedback, including your typing speed (words per minute) and accuracy percentage.</p> 

                    <h3>Visualizations:</h3><p> What sets Forest Fingers apart is its ability to display your typing speed and accuracy results in a graphical format. You can track your progress and identify areas for improvement through our intuitive charts and graphs.</p>

                    <h3>Customizable Tests:</h3> <p>Tailor your typing tests to your preferences. You can choose different text categories and difficulty levels to make your practice more enjoyable and challenging.</p>

                    <br />
                <h2>Why Forest Fingers?</h2>

                    <h3>Skill Improvement:</h3> <p>Regular typing tests can help you enhance your typing skills, making you more efficient in your daily tasks and activities.</p>

                    <h3>Career Advancement:</h3> <p>Typing is an essential skill for many professions. Improve your typing speed to boost your productivity and advance in your career.</p>

                    <h3>Educational:</h3> <p>Forest Fingers is a valuable resource for students and educators. Enhance your typing abilities for school assignments and academic success.</p>

                    <h3>Fun and Interactive:</h3> <p>Our platform turns typing practice into an enjoyable experience, helping you stay motivated to achieve your goals.</p>
        </p>
    </div>
  )
}

export default Info;
