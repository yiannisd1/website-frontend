import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import HomepageComponent from "./components/home/HomeComponent";
import NavBarComponent from "./shared/components/NavBarComponent";
import DailyTrackingComponent from "./components/dailyTracking/DailyTrackingComponent"; // Ioannis Doulgerakis SIT378 Trimester 2 2023
import AboutUsComponent from "./components/aboutUs/AboutUsComponent";
import OurProjectComponent from "./components/ourProject/OurProjectComponent";
import LoginComponent from "./components/login/LoginComponent";
import OurTeamComponent from "./components/ourTeam/OurTeamComponent";
import ContactUsComponent from "./components/contactUs/ContactUsComponent";
import SignUpComponent from "./components/signUp/SignUpComponent";
import FooterComponent from "./components/footer/FooterComponent"; // Ioannis Doulgerakis SIT378 Trimester 2 2023
import GlobalStateProvider from "./stores/GlobalStateProvider";



function App() {
  return (
    <GlobalStateProvider>
      <NavBarComponent />

      <Grid style={{ marginTop: "1em" }}>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/dailyTracking" component={DailyTrackingComponent} /> {/* Ioannis Doulgerakis SIT378 Trimester 2 2023 */}
        <Route path="/aboutUs" component={AboutUsComponent} />
        <Route path="/loginIn" component={LoginComponent} />
        <Route path="/ourTeam" component={OurTeamComponent} />
        <Route path="/ourProject" component={OurProjectComponent} />
        <Route path="/contactUs" component={ContactUsComponent} />
        <Route path="/signUp" component={SignUpComponent} />
        <Route path="/footer" component={FooterComponent} /> {/* Ioannis Doulgerakis SIT378 Trimester 2 2023 */}
      </Grid>
    </GlobalStateProvider>
  
  );

}

export default App;



// return (
//   <PowerBIEmbed
//   embedConfig = {{
//     type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
//     id: '<Report Id>',
//     embedUrl: '<Embed Url>',
//     accessToken: '<Access Token>',
//     tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
//     settings: {
//       panes: {
//         filters: {
//           expanded: false,
//           visible: false
//         }
//       },
//       background: models.BackgroundType.Transparent,
//     }
//   }}

//   eventHandlers = {
//     new Map([
//       ['loaded', function () {console.log('Report loaded');}],
//       ['rendered', function () {console.log('Report rendered');}],
//       ['error', function (event) {console.log(event.detail);}],
//       ['visualClicked', () => console.log('visual clicked')],
//       ['pageChanged', (event) => console.log(event)],
//     ])
//   }

//   cssClassName = { "reportClass" }

//   getEmbeddedComponent = { (embeddedReport) => {
//     window.report = embeddedReport;
//   }}
// />
// )
