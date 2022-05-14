import React, { useEffect, useState } from "react";
import agent from "../../proxy/userService";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useLocation } from "react-router-dom";

export default function WelcomeComponent(props) {
  const location = useLocation();
  //location.state[0]

  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    agent.UserAPI.detail(location.state[0]).then((response) => {
      setUserDetail(response);
      console.log(response);
    });
  }, []);
  return (
    <>
      Welcome
      {userDetail && (
        <div>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Email -{userDetail.email}
        </Typography>
        <Typography variant="h5" component="div">
        UserName -{userDetail.firstname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        LastName -{userDetail.lastname}
        </Typography>
        <Typography variant="body2">
        UserLevel- {userDetail.userLevel}
          <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        LastName -{userDetail.telephone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get Detail</Button>
      </CardActions>
    </Card>
        </div>
      )}
    </>
  );
}
