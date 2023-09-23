import React, {useState, useEffect} from 'react';
import Calories from './Calories';
import Distance from './Distance';
import Cadence from './Cadence'; //YD
import Power from './Power'; //YD
import CombinedComponentSpeed from './Speed'; //YD
import CombinedComponentHeartRate from './HeartRate'; //YD
import FooterComponent from "../footer/FooterComponent";
// import { signInWithGooglePopup } from './utils/firebase';

const dailyTracking = (props) => {

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

    
// const logGoogleUser = async () => {

//     try {
//       const response = await signInWithGooglePopup();
//       // Handle the Firebase authentication response if needed
//       console.log(response);

//       if (response.user) {
//         // Request access to Google Fit API after Firebase authentication
//         const auth = window.gapi.auth.getAuth();
//         auth.signIn().then(() => {

//           if (auth.isSignedIn.get()) {
//             // Request access to Google Fit API
//             window.gapi.client.load('fitness', 'v1', () => {
//               window.gapi.client.fitness.users.dataSources.list({
//                 userId: 'me',
//               }).then(response => {
//                 console.log('Data sources:', response.result);
//                 // Handle the fitness data sources here
//               }).catch(error => {
//                 console.error('Error loading fitness data sources:', error);
//               });
//             });
//           }
//         });
//       }
//     } catch (error) {
//       console.error('Google sign-in error:', error);
//     }
//   };
 // Dynamically create a script element to load the Google API Client Library
//     const script = document.createElement('script');
//     script.src = 'https://apis.google.com/js/api.js';
//     script.async = true;
//     script.defer = true;

//     // Attach an event listener to handle script load
//     script.addEventListener('load', () => {
//       // Initialize Google Sign-In
//       window.gapi.load('auth', () => {
//         window.gapi.auth.init({
//           client_id: '821616315515-todhstc46ephg2ridgt6n013nsp9oeom.apps.googleusercontent.com', 
//         }).then(() => {

//           // Attach an event listener to your sign-in button
//           document.getElementById('google-signin-button').addEventListener('click', () => {

//             // Call the logGoogleUser function when the button is clicked
//             logGoogleUser();
//           });
//         });
//       });
//     });

//     // Append the script element to the document's head

//     //document.head.appendChild(script);

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

                <CombinedComponentHeartRate/>    
                
                <p style= {{position: "relative", top: "-250px", left: "210px", fontSize: "30px", color: "white"}}>Today's Average Heart Rate</p>
                <div style={{position: "relative", top: "-200px", left:"280px"}}>
              
                <div className="row mt-3">
                    <div className="col-md-2">
                        <CombinedComponentHeartRate score={reviewScore9}></CombinedComponentHeartRate>
                    </div>
                </div>
                </div>
                
                <p style= {{position: "absolute", top: "2360px", left: "700px", fontSize: "30px", color: "white"}}>Today's Maximum Heart Rate</p>
                <div style={{position: "relative", top: "-400px", left:"800px"}}>
                
                <div className="row mt-3">
                    <div className="col-md-2">
                        <CombinedComponentHeartRate score={reviewScore10}></CombinedComponentHeartRate>
                    </div>
                </div>
                </div>


                {/* Speed - YD */}
                <p style= {{position: "relative", top: "-300px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Speed</p>
                
                {/* YD */}
                <CombinedComponentSpeed/>

                <p style= {{position: "relative", top: "-150px", left: "210px", fontSize: "30px", color: "white"}}>Today's Average Speed</p>
                <div style={{position: "relative", top: "-100px", left:"280px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        {/* YD */}
                        <CombinedComponentSpeed score={reviewScore11}></CombinedComponentSpeed> 
                    </div>
                </div>
                </div>

                <p style= {{position: "relative", top: "-390px", left: "700px", fontSize: "30px", color: "white"}}>Today's Maximum Speed</p>
                <div style={{position: "relative", top: "-340px", left:"800px"}}>
                <div className="row mt-3">
                    <div className="col-md-2">
                        {/* YD */}
                        <CombinedComponentSpeed score={reviewScore12}></CombinedComponentSpeed>
                    </div>
                </div>
                </div>

 
                {/* Power - YD */}
                <p style= {{position: "relative", top: "-150px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Power</p>
                <Power/>

                {/* Cadence - YD */}
                <p style= {{position: "relative", top: "-50px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Cadence</p>
                <Cadence/>
 
                {/* Footer - YD */}
                <FooterComponent />

            </div>

        </div>

    )

}

export default dailyTracking;