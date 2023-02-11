import React from 'react'
import Bear from './Bear';
import Card from './Card';


// import Link
function Title() {
    return (
        <div className="main_comp">

            {/* eyes="display_eyes"  
        pupil_animate="eye_reject"
        eyes_animate="eyes_spin" 
        pupils="display_eyes" */}
            <Bear className="nox_main" eyes_animate="eye_roll" eyes="display_eyes" arm_animate="close_eyes" />
            <div className="main_cards_container">
                <Card qnumber="1" title="question title: short description abt the question" que_no="q1" />
                <Card qnumber="2" title="question title: short description abt the question" que_no="q2" />
                <Card qnumber="3" title="question title: short description abt the question" que_no="q3" />
                <Card qnumber="4" title="question title: short description abt the question" que_no="q4" />
                <Card qnumber="5" title="question title: short description abt the question" que_no="q5" />
                <Card qnumber="6" title="question title: short description abt the question" que_no="q6" />
                <Card qnumber="7" title="question title: short description abt the question" que_no="q7" />
                <Card qnumber="8" title="question title: short description abt the question" que_no="q8" />
                <Card qnumber="9" title="question title: short description abt the question" que_no="q9" />
                <Card qnumber="10" title="question title: short description abt the question" que_no="q10" />
                <Card qnumber="11" title="question title: short description abt the question" que_no="q11" />

            </div>
        </div>
    );
}

export default Title;