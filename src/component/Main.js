import React from 'react'
import "./Main.css"
import tickmark from "../image/Vector.png";
import eye from "../image/Ellipse 66.png"
import date from "../image/Rectangle 25.png"
import resume from "../image/Rectangle 4017.png"
import profileImage from "../image/profile image.png"
import bell from "../image/bell.png"
const Main = () => {
    return (
        <>
            <div className="notification">
                <div className="circle">
                    <img src={bell} className="bell-img" alt="profile" />
                </div>
                <div className="small-profile">
                    <img src={profileImage} className="small-profile-img" alt="profile" />
                </div>
            </div>
            <div className="profile-image">
                <img src={profileImage} className="profile-img" alt="profile" />
            </div>
            <div className="edit-profile">
                <span className="edit-profile-text">Edit Profile</span>
            </div>
            <div className="first-name">
                <span>First Name</span>
                <input type="text" placeholder="Mehrab"></input>
            </div>
            <div className="last-name">
                <span>Last Name</span>
                <input type="text" placeholder="Bozorgi"></input>
            </div>
            <div className="email">
                <span>Email</span>
                <input type="email" className="email-text" placeholder="Mehrabbozorgi.business@gmail.com"></input>
                <div className="tick-div">
                    <img src={tickmark} className="tick-mark-image" alt="tick mark" />
                </div>
            </div>
            <div className="mobile">
                <span>Mobile</span>
                <input type="number" className="mobile-text" placeholder="9328047171"></input>
                <div className="tick-div">
                    <img src={tickmark} className="tick-mark-image" alt="tick mark" />
                </div>
            </div>
            <div className="password">
                <span>Password</span>
                <input type="password" className="password-text" placeholder="abc 123"></input>
                <div className="eye-div">
                    <img src={eye} className="eye-image" alt="eye" />
                </div>
            </div>

            <div className="college-start-date">
                <span>College Start Date</span>
                <input type="date" className="college-start-date-text" placeholder="01/01/1990" />
                <div className="college-div">
                    {/* <img src={date} className="college-start-date-image" alt="date" /> */}
                </div>
            </div>
            <div className="college-end-date">
                <span>College End Date</span>
                <input type="date" className="college-end-date-text" placeholder="01/01/1990" />
                <div className="college-end-div">
                    {/* <img src={date} className="college-end-date-image" alt="date" /> */}
                </div>
            </div>

            <div className="resume">
                <span>Resume</span>
                <input type="text" className="resume-text" placeholder="Upload File"></input>
                <div className="resume-div">
                    <img src={resume} className="resume-image" alt="resume" />
                </div>
            </div>

            <button className="cancel-button">Cancel</button>
            <button className="submit-button">Submit</button>

        </>
    )
}

export default Main