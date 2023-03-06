import React from 'react'


import SeriesFive from "../../../commonResource/images/home/watch-series-5.jpg"
import Banker from '../../../commonResource/images/home/banker.png'
import TvLogo from '../../../commonResource/images/icons/apple-tv-logo.png'
import AppleWatch from "../../../commonResource/images/home/Apple_Watch.jpg"



function FifthSec() {
  return (
    <div>
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={TvLogo} alt="#" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={Banker} />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  {/* <div className="logo-wrapper">
                                      {AppleWatch}
							</div> */}
                </div>
                <div className="description-wraper">
                 <h2> It’s the ultimate device for a healthy life.</h2>
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FifthSec