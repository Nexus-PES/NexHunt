import React from 'react'
// import profileImage from '../images/profile_img.png'

export default function Profile(props) {

    return (
        <div className="profile_comp">
            <div className="profile_box">
                <div className="profile_name">{props.name}</div>
                <div className="profile_logo" />
            </div>
        </div>
    );
}