import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import { MdRefresh, MdOutlineSearch, MdSearch } from "react-icons/md";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import CompanyRiderCard from "common/CompanyRiderCard";
import DashboardTable from './DashboardTable'
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";

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
  Divider,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import { AccountCircle } from "@mui/icons-material";
import ToDoorSearch from "common/ToDoorSearch";
import ManageCompanyCard from "features/manageCompanies/ManageCompanyCard";
import { post, get, put } from "services/fetch";
import SuperAdminApi from "apis/UserApi";

function Signup(props) {
  const [userType, setUserType] = React.useState("");
  const [show, setshow] = React.useState(false);
  const [filtered, setFiltered] = React.useState([]);

  //  const getUserStatsQueryResult = UserApi.useGetStatsQuery();
  //  console.log(getUserStatsQueryResult);
  //  const userStats = getUserStatsQueryResult?.data?.data;
const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery({});
const companyStatistics = getCompanyStatisticsQueryResult?.data;

console.log(companyStatistics);
  const getAllRIderQueryResult = UserApi.useGetAllQuery({ userType: "rider" });
  const totalRiders = getAllRIderQueryResult?.data?.data;

   

  const getAllCompanyQueryResult = UserApi.useGetAllQuery({
    userType: "company",
  });
  const totalCompanies = getAllCompanyQueryResult?.data?.data;

  const getAllCustomerQueryResult = UserApi.useGetAllQuery({
    userType: "customer",
  });
  const totalCustomers = getAllCustomerQueryResult?.data?.data;

  //  console.log(getAllQueryResult.data.data);

  const handleChange = (event) => {
    // setAge(event.target.value);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

   const getAllTripsQueryResult = UserApi.useGetAllTripsQuery({
     //  userType: "Trips",
   });
   const totalTrips = getAllTripsQueryResult?.data;

  const filterRiders = (text) => {
    console.log(text);
    console.log(totalRiders);
    // let kk =
    let pp = totalRiders.filter((e) =>
      e.fname?.toLowerCase()
    );
    // let kk = totalRiders.map((e) => e.fname);
    setFiltered(pp);
    // console.log(kk.filter((e) => text?.toLowerCase() == e?.toLowerCase()));
    // console.log(kk);
  };
  function numberWithCommas(x) {
    // serPrice.value = x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //  formState.target_amount=cleanupNumber(serPrice.value)
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <div className="">
        {/* <span className="text-xs mr-1 opacity-50">
          <MdRefresh />
        </span> */}
        <ToDoorSearch />
        <Typography variant="h5" className="font-bold">
          Welcome Back
        </Typography>
      </div>
      <div className="flex justify-between mt-4">
        <div className="mr-3">
          <WallCards
            dashboard={true}
            green={true}
            name="Total Companies"
            count={companyStatistics && companyStatistics?.total_company|| 0}
          />
        </div>
        <div className="mr-3">
          <WallCards
            dashboard={true}
            name="Total Riders"
            count={companyStatistics && companyStatistics?.total_riders|| 0}
          />
        </div>
        <div className="mr-3">
          <WallCards
            dashboard={true}
            name="Rides in progress"
            count={companyStatistics && companyStatistics?.rider_in_progress|| 0}
          />
        </div>
        <div className="mr-3">
          <WallCards
            dashboard={true}
            name="Users"
            count={companyStatistics && companyStatistics?.active_bikes|| 0}
          />
        </div>
        <div className="relative w-full">
          <div
            className="flex-between px-2 w-full text-xs absolute "
            style={{ top: "-20px" }}
          >
            <p className="font-bold flextext-xs self-end">Today</p>
            {/* <div className="flex items-center">
              <span className="text-xs mr-1 opacity-50">
                <MdRefresh />
              </span>
              <span className="text-xs opacity-50">Refresh</span>
            </div> */}
          </div>
          <WallCards
            dashboard={true}
            small={true}
            name="Earnings"
            count={numberWithCommas(
              companyStatistics && companyStatistics?.total_earnings?.toFixed(2) || 0
            )}
          />
        </div>
      </div>
      <div>
        <DashboardTable riders={totalRiders} />
      </div>
    </div>
  );
}

export default Signup;
