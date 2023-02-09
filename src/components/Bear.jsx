import React from 'react'
// import Nox from "../images/nox_body.png"
// import Eyes from "../images/nox_eyes.png"
// import Nox_pupil from "../images/nox_pupil.png"
// import Nox_hand from "../images/nox_hand.png"
// import Spin from "../images/spiral.png"

export default function Bear(props) {
    // constructor(props) {
    //     super(props);
    //     this.getBoundingClientRect = this.getBoundingClientRect.bind(this);
    // }


    return (
        <div className="bear_comp">
            <img className="bear_img" src="assets/images/nox_body.png" alt="proximity eyes" />
            <div className={`bear_eyes ${props.eyes} ${props.eyes_display}`}>
                <img className={`bear_eye_left bear_eye  ${props.eyes_animate}`} src="assets/images/nox_eyes.png" alt="bear eyes" />
                <img className={`bear_eye_right bear_eye ${props.eyes_animate}`} src="assets/images/nox_eyes.png" alt="bear eyes" />
            </div>
            <div className={`bear_pupils ${props.pupils} ${props.pupil_display}`}>
                <img className={`bear_pupil_left bear_pupil ${props.pupil_animate}`} src="assets/images/nox_pupil.png" alt="bear pupil" />
                <img className={`bear_pupil_right bear_pupil ${props.pupil_animate}`} src="assets/images/nox_pupil.png" alt="bear pupil" />
            </div>
            <div className={`bear_spin ${props.spin_eyes}`}>
                <img className={`bear_spin_left bear_spin_eye ${props.arm_left_spin} ${props.spin_eye_animate}`} src="assets/images/spiral.png" alt="spinning eye" />
                <img className={`bear_spin_right bear_spin_eye ${props.arm_right_spin} ${props.spin_eye_animate}`} src="assets/images/spiral.png" alt="spinning eye" />
            </div>
            <div className="bear_arms">
                <img className={`bear_arm_left bear_arm ${props.arm_left_animate} ${props.arm_animate}`} src="assets/images/nox_hand.png" alt="bear hand" />
                <img className={`bear_arm_right bear_arm ${props.arm_right_animate} ${props.arm_animate}`} src="assets/images/nox_hand.png" alt="bear hand" />
            </div>
        </div>
    )

    //eyes="display_eyes"  
    //.eye_reject --- for pupils, pupil_animate="eye_reject", pupils="display_eyes" 
    //.eye_peep --- for eyes, eyes_animate="eyes_spin" , eyes_animate="eye_roll"
    //spain_animate -- for spinning eyes, spin_eye_animate="spin_animate"

}

        // const eyes = document.querySelectorAll('.bear_eye')
        // const anchor = document.querySelector("bear_img");
        // const rekt = anchor.getBoundingClientRect();
        // const anchorX = rekt.left + rekt.width / 2;
        // const anchorY = rekt.top + rekt.height / 2;

        // document.addEventListener("mousemove", e => {
        //     const mouseX = e.clientX;
        //     const mouseY = e.clientY;

        //     const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        //     console.log(angleDeg)

        //     eyes.forEach(eye => {
        //         eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        //         // anchor.style.filter = `hue-rotate(${angleDeg}deg)`
        //     })
        // })

        // function angle(cx, cy, ex, ey) {
        //     const dy = ey - cy;
        //     const dx = ex - cx;
        //     const rad = Math.atan2(dy, dx);
        //     const deg = rad * 180 / Math.PI;
        //     return deg;
        // }