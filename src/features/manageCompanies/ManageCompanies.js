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
import pdf from "images/pdf.png";
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
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  MenuItem,
  Modal,
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
import moment from "moment";

function ManageCompanies(props) {

  const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery(
    {}
  );
  const companyStatistics = getCompanyStatisticsQueryResult?.data;
  // const dispatch = useDispatch
  const [show, setShow] = useState(false);
  const [companyRiders, setCompanyRiders] = useState([]);
  const [tempCompanyRiders, setTempCompanyRiders] = useState([]);
  const [companyEarns, setCompanyEarns] = useState([]);
  const [companyNames, setCompanyName] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [user, setUser] = useState();
  const [count, setcount] = useState(0);
  const [opens, setOpens] = React.useState(false);

  const handleShow = (verified) => {
    if (verified) {
      setShow(!show);
    } else {
      setOpens(true);
    }
    // console.log("jo(truehn");
  };
  const history = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    minHeight: "520px",
    bgcolor: "background.paper",
    borderRadius: "3%",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

  const tabloid = tempCompanyRiders?.map((e) => ({
    image: e?.profileUrl,
    name: e?.fname,
    company: e?.companyName,
    id: e?.email,
    ratings: moment(e.created_at).format("ll"),
    tripsCompleted: "-",
    phoneNo: e?.phoneNo,
    status: e?.currTripState,
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
    count: count,
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
    setTempCompanyRiders(res.data.data);
  };

  const ridersUnderCompanyR = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/getAllRidersCompany?userId=${companyId}`,
      //  body: { ...payload },
      auth: true,
    });
    console.log(res?.data?.data);
    return res?.data?.data?.length;
  };
  function numberWithCommas(x) {
    // serPrice.value = x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //  formState.target_amount=cleanupNumber(serPrice.value)
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const companyEarnings = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/companyTotalEarningStats?userId=${companyId}`,
      //  body: { ...payload },
      auth: true,
    });
    setCompanyEarns(res?.data?.data[0]?.total_revenue || 0);
    // setCompanyEarns(res.data.data);
  };

  const filterRidersTable = (val) => {
    // console.log("Samson"?.includes(val));
    // console.log(companyRiders);
    console.log(val);
    let temp = companyRiders?.filter((e) =>
      e?.fname.toLowerCase()?.includes(val?.toLowerCase())
    );
    setTempCompanyRiders(temp);
  };

  const approveDecline = async (status, companyId) => {
    const res = status
      ? await put({
          endpoint: `api/super-admin/approveUser?id=${companyId}`,
          //  body: { ...payload },
          auth: true,
        })
      : await put({
          endpoint: `api/super-admin/rejectUser?id=${companyId}`,
          //  body: { ...payload },
          auth: true,
        });

    if (res.data.success) {
      setcount(count + 1);
      enqueueSnackbar(res?.data?.message, { variant: "succes" });

    } else {
      console.log(res)
      enqueueSnackbar(res?.data?.message, { variant: "error" });
    }
  };
  

  return (
    <div>
      <ToDoorSearch />

      {!show && (
        <div className="">
          <div class="w-2/5 mb-8">
            <div className="flex items-center  mt-8 border2 p-2">
              <NewWallCards
                dashboard={true}
                small={true}
                bigspace={true}
                name="Verified Companies"
                count={companyStatistics?.total_company}
              />
              <NewWallCards
                dashboard={true}
                small={true}
                cutborder={true}
                name="Unverified Companies"
                count={numberWithCommas(companyStatistics?.unverified_company)}
              />
            </div>
          </div>
          <div class="flex flex-wrap gap-4">
            {totalCompanies?.map((e) => (
              <div
                onClick={() => {
                  ridersUnderCompany(e?._id);
                  companyEarnings(e?._id);
                  setCompanyName(e?.fname);
                  setCompanyImage(e?.profileUrl);
                  setUser(e);
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
            <Avatar src={companyImage} className="rounded-full" />
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
                count={numberWithCommas(companyEarns)}
              />
            </div>
          </div>
          <div className="flex  justify-between  items-end">
            <Typography
              variant="h5"
              className="font-bold mt-8 text-primary-main"
              // text-blue-800
            >
              Riders
            </Typography>

            <div className="flex justify-between items-end">
              <TextField
                onChange={(e, value) => filterRidersTable(e.target.value)}
              />
              {/* <Autocomplete
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
              /> */}
            </div>
          </div>

          {tabloid?.map((e) => (
            <ManageCompaniesTable tableArray={e} />
          ))}
        </div>
      )}

      <Modal
        // open={true}
        open={opens}
        onClose={() => setOpens(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <div>
              <div className="flex gap-8">
                <div className="flex">
                  <Avatar
                    sx={{ width: 100, height: 100 }}
                    src={user?.profileUrl}
                  />
                </div>
                <div className="mt-4">
                  <Typography className="font-bold mb-5" variant="h5">
                    {user?.fname}
                  </Typography>
                  <div class="flex gap-5">
                    <Button
                      onClick={() => approveDecline(true, user?._id)}
                      className="bg-green-500"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => approveDecline(false, user?._id)}
                      className="bg-red-500"
                    >
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
              <Divider className="my-8" />
              <div class="flex gap-20">
                <div className=" gap-16 font-semibold">
                  <Typography className="my-3 font-semibold">
                    Total Earnings
                  </Typography>
                  <Typography className="font-semibold text-primary-main">
                    {" "}
                    XXXXXXX
                  </Typography>
                </div>
                <div className=" font-semibold">
                  <Typography className="my-3 font-semibold">
                    No Of Rides
                  </Typography>
                  <Typography className="font-semibold text-primary-main">
                    XXXXX
                  </Typography>
                </div>
              </div>
              <Divider className="my-8" />
              <div class="flex gap-16 ">
                <div className="flex flex-col gap-3 font-semibold">
                  <Typography className="font-semibold">Address:</Typography>
                  <Typography className="font-semibold">
                    Phone Number:
                  </Typography>
                  <Typography className="font-semibold">
                    Email address:
                  </Typography>
                  <Typography className="font-semibold">ID Card:</Typography>
                  <Typography className="font-semibold">
                    Last Login Image
                  </Typography>
                </div>
                <div className="flex flex-col gap-3">
                  <Typography>{user?.city}</Typography>
                  <Typography>{user?.phoneNo}</Typography>
                  <Typography>{user?.email}</Typography>
                  <Typography>{"****"}</Typography>
                  <Typography>{"***"}</Typography>
                </div>
              </div>
              <div class="flex gap-6 mt-4">
                <div>
                  <Typography className="font-semibold">ID:</Typography>
                  {user?.idPhotoUrl?.endsWith(".pdf") ? (
                    <a href={user?.idPhotoUrl} target="_blank">
                      <img className="w-full h-32  border-blue-300" src={pdf} />
                    </a>
                  ) : (
                    <img
                      className="w-[300px] h-32  border-blue-300"
                      src={user?.idPhotoUrl}
                    />
                  )}
                </div>
                <div>
                  <Typography className="font-semibold">
                    CAC Document:
                  </Typography>
                  {user?.companyRegistrationPhotoUrl?.endsWith(".pdf") ? (
                    <a href={user?.companyRegistrationPhotoUrl} target="_blank">
                      <img className="w-full h-32 border-blue-300" src={pdf} />
                    </a>
                  ) : (
                    <img
                      className="w-[300px] h-32  border-blue-300"
                      src={user?.companyRegistrationPhotoUrl}
                    />
                  )}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default ManageCompanies;
