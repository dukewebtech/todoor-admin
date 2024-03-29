
import React, { useState } from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";

import { FcGoogle } from 'react-icons/fc';
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from 'common/LoginHeader';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toDoorLogo from 'images/Ellipse 30.png'
import background from 'images/background.png'
import snake from 'images/Mask group.png'

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };

  // console.log(localStorage.getItem('authUser'))
  const history = useNavigate();


  const redirect = () => {
    // localStorage.setItem('authUser', 'true')

    history('/dashboard');
  }

  // console.log(localStorage.getItem('authUser'))

  // const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNo: "",
      password: "",
      userType: "admin",
    },

    validationSchema: yup.object({
      email: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      localStorage.setItem("il", true);
      // redirect();
      // history('/dashboard')

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        console.log(data.data)
        enqueueSnackbar("Logged in successful", { variant: "success" });
        redirect();
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  return (
   
    <div className=" w-full pl-16">
      <div className="flex justify-between">
        <div className="pt-4 w-2/5">
          <div className="flex flex-col w-full h-full  ">
            <LoginHeader />

            <div className="w-full h-full">
              <div className="my-8">
                <Typography variant="h3" className="font-bold">
                  Sign In
                </Typography>
                {/* <p>Enter your credentials to create your account.</p> */}
              </div>
              <form onSubmit={formik.handleSubmit}>
                <Typography variant="h6" className="mb-2">
                  Email Address
                </Typography>
                <TextField
                  size="medium"
                  className="w-full"
                  placeholder="Enter your email"
                  // onChange={handleChange}
                  //     onChange={(e)=>{
                  //   alert('k')
                  //   // console.log(e)
                  //   // localStorage.setItem ('location', e.target.value)
                  // }}
                  name="email"
                  {...getTextFieldFormikProps(formik, "email")}
                />
                <Typography variant="h6" className="mt-10 mb-2">
                  Choose Password
                </Typography>
                <PasswordTextField
                  className="w-full "
                  placeholder="Enter your Password"
                  // type="password"
                  // onChange={handleChange}
                  //     onChange={(e)=>{
                  //   alert('k')
                  //   // console.log(e)
                  //   // localStorage.setItem ('password', e.target.value)
                  // }}
                  name="password"
                  {...getTextFieldFormikProps(formik, "password")}
                />
                <FormGroup>
                  <FormControlLabel
                    className="mt-5"
                    control={<Checkbox defaultChecked />}
                    label="Remember Information"
                  />
                </FormGroup>
                {/* <Input placeholder='Location' className='m-b-20'/> */}
                <div className="text-white m-b-30 mt-5  ">
                  <Button
                    className="p-3 w-full text-base"
                    type="submit"
                    // onClick={() => localStorage.setItem('type', 'CLIENT')}
                    // className=' '
                  >
                    Sign In
                  </Button>
                  {/* <Button
                    variant="outlined"
                    startIcon={<FcGoogle />}
                    className="p-3 bg-white text-base text-black mt-4 w-full"
                    type="submit"
                    // onClick={() => localStorage.setItem('type', 'CLIENT')}
                    // className=' '
                  >
                    Sign In With Google
                  </Button> */}
                </div>
              </form>
              {/* <a className="text-center " href="">
                <h2 className="">
                  Already have an account?
                  <b className="ml-1  color{#039836}">Sign In</b>
                </h2>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="relative min-h-screen  flex flex-col items-stretch bg-primary-main text-white p-10 justify-center w-2/5"
          style={{
            position: "relative",
            backgroundImage: `url('${snake}')`,
          }}
        >
          {/* <img
            className="relative w-[100%] h-[100%]"
            src={snake}
          /> */}
          <div className="z-10 mx-auto">
            <Typography variant="h1" className=" font-bold">
              {/* Earn */}
              Admin
            </Typography>
            <Typography variant="h1" className="mt-10 font-bold">
              {/* Ride */}
              Dashboard
            </Typography>
          </div>
          {/* <Typography variant='h1' className='mt-10 font-bold'>Manage.</Typography> */}

          {/* background:`url(${background})` */}
          {/* <div className='two-circles relative' style={{ position: 'relative' }}></div> */}
          {/* <img src={trustedBy3} className='' style={{ position: 'absolute', top: '50%', height: '49%', width: '98.8%' }} /> */}
          {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
