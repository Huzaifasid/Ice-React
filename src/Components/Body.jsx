import React from "react";
import Image from "../images/iceImage.jpeg"
import Image2 from "../images/bodyimg.png"
import "../Components/body.css"

const Body = () => {

    return (<>
        <img src={Image} width="100%" height="609px" />

        <div className="mainDiv">
            <div className="container col-lg-10">
                <div className="row">
                    <div className="col-sm">
                        <div className="py-4">
                            <h3>NEW PRODUCT</h3>
                            <h1>The Twist of Healthy Yogurt</h1>
                            <p>
                                This website templete has been designed by <br />
                                <a href="javascript:void(0)">Free Website Templete</a> <br />
                                for you,for free.You can replace all this text with your own text.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="imgDiv py-5">
                       <img src={Image2} width="170px"/>
                     

                    </div>
                    </div>

                </div>
            </div>
        </div>

    </>)
}

export default Body 