import React, { useState } from "react";
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
import { post, get, put } from "services/fetch";

// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import ManageCompanyCard from "./ManageCompanyCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import ManageCompaniesTable from "./ManageCompaniesTable";
import NewWallCards from "common/NewWallCards";
import ToDoorSearch from "common/ToDoorSearch";
import { useDispatch } from "react-redux";

function ManageCompanies(props) {
  // const dispatch = useDispatch
  const [show, setShow] = useState(false);
  const [companyRiders, setCompanyRiders] = useState([]);
  const [companyEarns, setCompanyEarns] = useState([]);
  const [companyNames, setCompanyName] = useState('');
  const handleShow = (event) => {
    setShow(!show);
    // console.log("john");
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  //   const ridersUnderCompany = async (userId) => {
  //     const res = await get({
  //       endpoint: `api/super-admin/company/getalluser?userType=company
  // `,
  //       //  body: { ...payload },
  //       auth: true,
  //     });
  //     console.log(userId);
  //   };

  const top100Films = [
    { label: "Edo State", year: 1994 },
    { label: "Oredo", year: 1972 },
  ];

  const tabloid = companyRiders?.map((e) => ({
    image: gigLogo,
    name: e?.fname,
    company: e?.companyName,
    id: e?._id,
    ratings: e?.userRating,
  }));

  const tableArray = [
    {
      image: gigLogo,
      name: "Nickky Samuel jonas  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },

    {
      image: gigLogo,
      name: "John jimmy Samuel  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },
  ];

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // localStorage.setItem('location', values.location)
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        // redirect()
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }
  const getAllCompanyQueryResult = UserApi.useGetAllQuery({
    userType: "company",
  });
  const totalCompanies = getAllCompanyQueryResult?.data?.data;
  console.log(totalCompanies);

  const functionHook = () => {
    //  dispatch(UserApi.useLoginMutation());
  };

  const ridersUnderCompany = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/getAllRidersCompany?userId=${companyId}`,
      //  body: { ...payload },
      auth: true,
    });
    console.log(res.data.data);
    setCompanyRiders(res.data.data);
  };

  const ridersUnderCompanyR = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/getAllRidersCompany?userId=${companyId}`,
      //  body: { ...payload },
      auth: true,
    });
    console.log(res?.data?.data);
    return (res?.data?.data?.length);
  };

  const companyEarnings = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/companyTotalEarningStats?userId=${companyId}`,
      //  body: { ...payload },
      auth: true,
    });
    setCompanyEarns(res?.data?.data[0]?.total_revenue);
    // setCompanyEarns(res.data.data);
  };

 

  return (
    <div>
      <ToDoorSearch />
      {!show && (
        <div>
          <div class="flex flex-wrap gap-6">
            {totalCompanies?.map((e) => (
              <div
                onClick={() => {
                  ridersUnderCompany(e?._id);
                  companyEarnings(e?._id);
    setCompanyName(e?.fname);

                }}
                className="w-[32%] mt-3"
              >
                <ManageCompanyCard companyDetails={e} handleShow={handleShow} />
              </div>
            ))}
          </div>
        </div>
      )}

      {show && (
        <div>
          <div
            onClick={handleShow}
            className="flex items-center mb-8 cursor-pointer w-16 p-2"
          >
            <div
              style={{ border: "1px solid #494949" }}
              className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
            >
              <RiArrowLeftSLine
                className=""
                style={{ fontSize: "22px", color: "#494949" }}
              />
            </div>
            <p style={{ color: "#494949" }} className="text-base">
              Back
            </p>
          </div>

          <div
            className="flex items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            <img src={gigLogo} />
            <Typography variant="h5" className="font-bold ml-4 ">
              {companyNames}
            </Typography>
          </div>
          <div className="flex ">
            <div className="flex items-center  mt-8 border2 p-2">
              <NewWallCards
                dashboard={true}
                small={true}
                bigspace={true}
                name="Riders"
                count={companyRiders?.length}
              />

              <NewWallCards
                dashboard={true}
                small={true}
                cutborder={true}
                name="Earnings"
                count={companyEarns}
              />
            </div>
          </div>
          <div className="flex justify-between  items-end">
            <Typography
              variant="h5"
              className="font-bold mt-8 text-primary-main"
              // text-blue-800
            >
              Riders
            </Typography>

            <div className="flex justify-between items-end">
              <Autocomplete
                className="mr-3"
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>

          {tabloid?.map((e) => (
            <ManageCompaniesTable tableArray={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCompanies;
