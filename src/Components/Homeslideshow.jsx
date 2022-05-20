import { height } from "@mui/system";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
const AutoplayExample = () => {
  const [autoplay, setAutoplay] = useState(true);

  const style = {
    textAlign: "center",
    background: "pink",
    fontSize: "30px",
    height:"500px",
    
  }

  return (
    <div>
      <div>
        <Slide autoplay={autoplay}>
          <div style={style}>
            <h3>WINTER SALE 20% OFF</h3>
           <img src="https://wallpaperaccess.com/full/1437631.jpg" alt="" />
          </div>
          <div style={style}>
          <h3>WINTER SALE 20% OFF</h3>
           <img src="https://img.freepik.com/free-photo/girlfriends-going-shopping-concept_53876-86016.jpg?w=2000" alt="" />
          </div>
          <div style={style}>
          <h3>WINTER SALE 20% OFF</h3>
          <img src="https://www.teahub.io/photos/full/108-1085963_full-hd-men-fashion.jpg" alt="" />
          </div>
        </Slide>
      </div>

      
     
    </div>
  );
};

export default AutoplayExample;