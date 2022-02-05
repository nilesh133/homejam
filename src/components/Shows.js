import React from 'react';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const Shows = () => {
    return (
        <>
            <div className='shows__heading'>
                <div className='shows__heading__left'>Upcoming Shows</div>
                <div className='shows__heading__right'>View all</div>
            </div>
            <div className="shows">

                <div className="shows__container">
                    <div className="shows__container__back"></div>
                    <div className='shows__container__img1 shows__container__img'></div>
                    <div className="shows__container__details">
                        <span className="shows__container__details__genre">Folk</span>
                        <h3 className="shows__container__details__name">Benny Dayal</h3>
                        <div className="shows__container__details__more">
                            <p style={{ color: "#0247fe" }} >More info <span><ArrowForwardOutlinedIcon /></span></p>
                            <span className="shows__container__details__more__icon"><BookmarkBorderOutlinedIcon /></span>
                        </div>
                    </div>

                </div>
                <div className="shows__container">
                    <div className='shows__container__img2 shows__container__img'></div>
                    <div className="shows__container__details">
                        <span className="shows__container__details__genre">Bollywood</span>
                        <h3 className="shows__container__details__name"> Vijay Yesudas</h3>
                        <div className="shows__container__details__more">
                            <p style={{ color: "#0247fe" }} >More info <span><ArrowForwardOutlinedIcon /></span></p>
                            <span className="shows__container__details__more__icon"><BookmarkBorderOutlinedIcon /></span>
                        </div>
                    </div>

                </div>
                <div className="shows__container">
                    <div className='shows__container__img3 shows__container__img'></div>
                    <div className="shows__container__details">
                        <span className="shows__container__details__genre">Folk</span>
                        <h3 className="shows__container__details__name">Andrea Jeremiah</h3>
                        <div className="shows__container__details__more">
                            <p style={{ color: "#0247fe" }} >More info <span><ArrowForwardOutlinedIcon /></span></p>
                            <span className="shows__container__details__more__icon"><BookmarkBorderOutlinedIcon /></span>
                        </div>
                    </div>

                </div>
                <div className="shows__container">
                    <div className='shows__container__img4 shows__container__img'></div>
                    <div className="shows__container__details">
                        <span className="shows__container__details__genre">Folk</span>
                        <h3 className="shows__container__details__name">Shilpa Rao</h3>
                        <div className="shows__container__details__more">
                            <p style={{ color: "#0247fe" }} >More info <span><ArrowForwardOutlinedIcon /></span></p>
                            <span className="shows__container__details__more__icon"><BookmarkBorderOutlinedIcon /></span>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
};

export default Shows;
