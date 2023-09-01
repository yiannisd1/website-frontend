import React, {useState, useEffect} from 'react';
import Calories from './Calories';
import Distance from './Distance';
import HeartRate from './HeartRate'; 
import Speed from './Speed';
import FooterComponent from "../footer/FooterComponent"; 

const DataSum = (props) => {

const [reviewScore, setReviewScore] = useState(10);
const [reviewScore2, setReviewScore2] = useState(10);
const [reviewScore3, setReviewScore3] = useState(10);
const [reviewScore4, setReviewScore4] = useState(10);
const [reviewScore5, setReviewScore5] = useState(10);
const [reviewScore6, setReviewScore6] = useState(10);
const [reviewScore7, setReviewScore7] = useState(10);
const [reviewScore8, setReviewScore8] = useState(10);
const [reviewScore9, setReviewScore9] = useState(10); //YD
const [reviewScore10, setReviewScore10] = useState(10); //YD
const [reviewScore11, setReviewScore11] = useState(10); //YD
const [reviewScore12, setReviewScore12] = useState(10); //YD




const fetchContent = () => {
    setReviewScore(1360);
    setReviewScore2(942.18);
    setReviewScore3(18);
    setReviewScore4(3740);
    setReviewScore5(64.52);
    setReviewScore6(36.55);
    setReviewScore7(0.61);
    setReviewScore8(166.99);
    setReviewScore9(158.62); // YD
    setReviewScore10(184); // YD 
    setReviewScore11(35.91); // YD
    setReviewScore12(68.43); // YD 



}

useEffect(() => {
    fetchContent();
}, []);
    return(
        <div className='body'>
            <div style={{overflow: "hidden"}}>
                <p style= {{position: "relative", top: "20px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Data Analytics</p>

                {/* Calories */}
                <i style= {{position: "relative", top: "30px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Calories</i>

                <p style= {{position: "relative", top: "30px", left: "250px", fontSize: "30px", color: "white"}}>Your Calories Today</p>

                <div style={{position: "relative", top: "60px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Calories score={reviewScore}></Calories>
                    </div>
                </div>
                </div>

                <p style= {{position: "relative", top: "-210px", left: "750px", fontSize: "30px", color: "white"}}>Your Average Calories</p>

                <div style={{position: "relative", top: "-180px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Calories score={reviewScore2}></Calories>
                    </div>
                </div>
                </div>

                <p style= {{position: "absolute", top: "510px", left: "190px", fontSize: "30px", color: "white"}}>Your Lowest Calories Recorded</p>

                <div style={{position: "relative", top: "-100px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Calories score={reviewScore3}></Calories>
                    </div>
                </div>
                </div>

                <p style= {{position: "absolute", top: "510px", left: "700px", fontSize: "30px", color: "white"}}>Your Highest Calories Recorded</p>


                <div style={{position: "relative", top: "-300px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Calories score={reviewScore4}></Calories>
                    </div>
                </div>
                </div>



                {/* Distance */}

                <p style= {{position: "relative", top: "-250px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Distance</p>


                <p style= {{position: "absolute", top: "900px", left: "230px", fontSize: "30px", color: "white"}}>Your Distance Today</p>


                <div style={{position: "relative", top: "-150px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Distance score={reviewScore5}></Distance>
                    </div>
                </div>
                </div>
                
                <p style= {{position: "absolute", top: "900px", left: "750px", fontSize: "30px", color: "white"}}>Your Average Distance</p>

                <div style={{position: "relative", top: "-350px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Distance score={reviewScore6}></Distance>
                    </div>
                </div>
                </div>

                <p style= {{position: "absolute", top: "1200px", left: "210px", fontSize: "30px", color: "white"}}>Your Minimum Distance</p>
                
                <div style={{position: "relative", top: "-250px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Distance score={reviewScore7}></Distance>
                    </div>
                </div>
                </div>

                <p style= {{position: "absolute", top: "1200px", left: "750px", fontSize: "30px", color: "white"}}>Your Longest Distance</p>


                <div style={{position: "relative", top: "-450px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Distance score={reviewScore8}></Distance>
                    </div>
                </div>
                </div>



                {/* Heart Rate - YD */}


                <p style= {{position: "relative", top: "-400px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Heart Rate</p>

                <p style= {{position: "relative", top: "-150px", left: "210px", fontSize: "30px", color: "white"}}>Today's Average Heart Rate</p>


                <div style={{position: "relative", top: "-100px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <HeartRate score={reviewScore9}></HeartRate>
                    </div>
                </div>
                </div>

                <p style= {{position: "absolute", top: "1835px", left: "700px", fontSize: "30px", color: "white"}}>Today's Maximum Heart Rate</p>

                <div style={{position: "relative", top: "-300px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <HeartRate score={reviewScore10}></HeartRate>
                    </div>
                </div>
                </div>

                {/* Speed - YD */}


                <p style= {{position: "relative", top: "-300px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Speed</p>

                <p style= {{position: "relative", top: "0px", left: "210px", fontSize: "30px", color: "white"}}>Today's Average Speed</p>


                <div style={{position: "relative", top: "50px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Speed score={reviewScore11}></Speed>
                    </div>
                </div>
                </div>

                <p style= {{position: "relative", top: "-240px", left: "700px", fontSize: "30px", color: "white"}}>Today's Maximum Speed</p>

                <div style={{position: "relative", top: "-190px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Speed score={reviewScore12}></Speed>
                    </div>
                </div>
                </div>



                {/* Power - YD */}
                <p style= {{position: "relative", top: "-150px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Power</p>



                {/* Cadence - YD */}
                <p style= {{position: "relative", top: "-50px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Cadence</p>







                <FooterComponent /> 
                
            </div>
        </div>
    )
}

export default DataSum;