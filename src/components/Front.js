import React from 'react';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const Front = () => {
    return (
        <div className="front">
            <nav className='front__navbar'>
                <div className="front__navbar__logo"></div>
                <ul className="front__navbar__menu">
                    <li>Search</li>
                    <li>Help</li>
                    <li>Account</li>
                    <li><span><LocalMallOutlinedIcon /></span></li>
                </ul>
            </nav>

            <div className="front__desc">
                <h1 className="front__desc__heading">Cari Cari</h1>
                <p className="front__desc__description">Live from their sofa to yours.Get closer to your favorite<br />
                    artists, and never miss out.
                </p>
            </div>

            <div className="front__label">
                <div className="front__label__container" style={{ borderTop: "2px solid #ff00ff", borderBottom: "2px solid #ff00ff", borderRight: "2px solid #ff00ff" }}>
                    <span style={{ color: "blue" }}><FavoriteBorderIcon /></span>
                    <span>0</span>
                    <span style={{ color: "gray" }}>Label</span>
                </div>
                <div className="front__label__container">
                    <span style={{ color: "gray" }}><BookmarkBorderOutlinedIcon /></span>
                    <span>0</span>
                    <span style={{ color: "gray" }}>Label</span>
                </div>
                <div className="front__label__container">
                    <span style={{ color: "gray" }}><BookmarkBorderOutlinedIcon /></span>
                    <span>0</span>
                    <span style={{ color: "gray" }}>Label</span>
                </div>
                <div className="front__label__container">
                    <span style={{ color: "gray" }}><BookmarkBorderOutlinedIcon /></span>
                    <span>0</span>
                    <span style={{ color: "gray" }}>Label</span>
                </div>
            </div>
        </div>
    )
}

export default Front;