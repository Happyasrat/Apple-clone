import React from 'react'


import Alerts from "././Alerts/Alerts";
import FirstSec from "./FirstSec/FirstSec";
import SecondSec from "./SecondSEc/SecondSec";

import ThirdSec from "./ThirdSec/ThirdSec";
import FourthSec from "./FourthSEc/FourthSec";
import FifthSec from "../Main/FifthSEc/FifthSec";
import SixthSec from "./SixthSEc/SixthSec";
import YoutubeVideos from "./YoutubeVideos/YoutubeVideos";

function Main() {
  return (
      <div>
     
      <Alerts />

      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <YoutubeVideos />
      
    </div>
  )
}

export default Main





