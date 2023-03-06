import React from 'react'

function FourthSec() {
  return (
    <div>
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">watchOS 9</div>
                <div className="description-wrapper">Extremely insightful.</div>
                {/* <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div> */}

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">See what's new</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">AirPods</div>
                <div className="description-wrapper">3rd generation</div>
                <div></div>
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

export default FourthSec