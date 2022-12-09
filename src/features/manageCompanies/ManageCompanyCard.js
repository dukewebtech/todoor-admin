import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";
import gigLogo from "images/Ellipse 56.png";
import moment from 'moment'
import axiosConn from "apis/ApiClient";
import axios from "axios";
  import { post, get, put } from "services/fetch";


// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from "images/Rectangle 7.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  Divider,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ManageCompanyCard({companyDetails,
handleShow, companyId}) {
  const [age, setAge] = React.useState("");
  // const [companyId, setCompanyId] = React.useState("636e237ced577dba2688816b");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

 const deleteRider = async () => {
   const res = await get({
     endpoint: `api/super-admin/deleteRider?userId=${companyId}`,
     //  body: { ...payload },
     auth: true,
   });
   console.log(res.data.data);
  //  setCompanyEarns(res.data.data);
 };

 const ridersUnderCompanyR = async (companyId) => {
   const res = await get({
     endpoint: `api/super-admin/getAllRidersCompany?userId=${companyId}`,
     //  body: { ...payload },
     auth: true,
   });
   console.log(res.data.data);
   return res.data.data.length;
 };



 console.log(companyDetails._id)
 
  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div className="">
      <Card
        className=" text-black text-center relative"
        sx={{width:300, minHeight: 120, backgroundColor: "#EBEBEB" }}
      >
        <CardContent className="">
          <div
            onClick={() => {
              handleShow();
            }}
            className="flex pb-2  cursor-pointer"
            style={{ backGroundColor: "#EBEBEB" }}
          >
            <img src={gigLogo} />
            <div
              className="ml-2 text-left"
              style={{ backGroundColor: "#EBEBEB" }}
            >
              <Typography variant="h6">
                {companyDetails?.fname || "GIG Logistics"}
              </Typography>
              <p className="medium-size cardhead">
                {companyDetails?.companyLocation || "Apapa Lagos"}
              </p>
            </div>
          </div>

          <Divider />

          <div className="w-4/5 ">
            <div className=" text-left pt-2">
              <div className="">
                <div className=" relative flex">
                  <img
                    className="absolute"
                    style={{ width: "27px" }}
                    src={gigLogo}
                  />
                  <img
                    className="absolute"
                    style={{ width: "27px", left: "20px" }}
                    src={gigLogo}
                  />
                </div>
                <div>
                  <Typography className="ml-14 mt-1 font-bold text-sm">
                    {/* {33 Riders} */}
                    XXXXXXXXXX
                    {/* {ridersUnderCompanyR()} */}
                    {/* {ridersUnderCompany(companyDetails?._id)} */}
                  </Typography>
                </div>
              </div>
              <div className="mt-4 " style={{ backGroundColor: "#EBEBEB" }}>
                <div>
                  <Typography className="text-sm font-bold text-cardhead-blue">
                    {/* NGN 20,000 Earned */}
                    XXXXXXXXXX
                  </Typography>
                  <p className="medium-size cardhead">{moment(companyDetails?.created_at).format('ll')}</p>
                </div>

                <p className="text-lg cardhead absolute bottom-3 opacity-50 right-2">
                  ...
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        {/* <Button size="small">Learn More</Button> */}
      </Card>
    </div>
  );
}

export default ManageCompanyCard;
