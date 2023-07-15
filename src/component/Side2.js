import React from 'react'
import "./Side2.css"
import leftarrow from "../image/left arrow.png"
import pen from "../image/pen.png"
import bellicon2 from "../image/bellicon2.png"
import security from "../image/security.png"
import appereance from "../image/appereance.png"
import help from "../image/help.png"
const Side2 = () => {
    return (
        <>
            <div className="sidebar-2">
                <div className='arrow-left'>
                    <img src={leftarrow} alt="left arrow" />
                </div>
                <div className='setting'>
                    <span>settings</span>
                </div>
                <div className='side2-edit'>
                    <img src={pen} alt="setting" />
                    <span>Edit Profile</span>
                </div>
                <div className='side2-bell'>
                    <img src={bellicon2} alt="sidebell2" />
                    <span>Notification</span>
                </div>
                <div className='side2-security'>
                    <img src={security} alt="security" />
                    <span>Security</span>
                </div>
                <div className='side2-appereance'>
                    <img src={appereance} alt="appereance" />
                    <span>Appereance</span>
                </div>
                <div className='side2-help'>
                    <img src={help} alt="help" />
                    <span>Help</span>
                </div>
            </div>
        </>
    )
}

export default Side2