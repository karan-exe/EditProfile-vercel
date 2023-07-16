import React from 'react'
import "./Side1.css"
import logo from "./image/logo@0 1.png"
import home from "./image/home.png"
import bellicon from "./image/bellicon.png"
import calendar from "./image/calendar.png"
import chart from "./image/chart.png"
import user from "./image/user.png"
import bottomsetting from "./image/bottom setting.png"
const Side1 = () => {
    return (
        <>
            <div className="sidebar-1">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='home'>
                    <img src={home} alt="home" />
                </div>
                <div className='sidebell'>
                    <img src={bellicon} alt="sidebell 1" />
                </div>
                <div className='calendar'>
                    <img src={calendar} alt="calendar" />
                </div>
                <div className='chart'>
                    <img src={chart} alt="chart" />
                </div>
                <div className='user'>
                    <img src={user} alt="user" />
                </div>
                <div className='bottom-setting'>
                    <img src={bottomsetting} alt="setting" />
                </div>
            </div>
        </>
    )
}

export default Side1