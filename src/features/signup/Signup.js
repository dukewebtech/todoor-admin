
import React,{useState} from 'react';
// import UserApi from "apis/UserApi";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
// import PasswordTextField from "common/PasswordTextField";
// import { getTextFieldFormikProps } from "utils/FormikUtils";
// import useAuthUser from "hooks/useAuthUser";
// import { Navigate } from "react-router-dom";
// import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from 'common/LoginHeader';

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from 'images/Rectangle 7.png'
// import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
// import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SignupLocation from './SignupLocation';
import SignupEmail from './SignupEmail';
// import { type } from '@testing-library/user-event/dist/type';
import SignupClientF from './SignUpClientF';

function Signup(props) {
  // const [age, setAge] = React.useState('');
  const [payload, setPayload] = useState({
    location:'',
    email_address:'',
    type:'',
    count: 0
  });
  
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  // const history = useNavigate();


//   const redirect = ()=>{

//     history('/signup-client');
// }

  // const authUser = useAuthUser();

  // const { enqueueSnackbar } = useSnackbar();
  // const [signupMuation, signupMutationResult] = UserApi.useSignupMutation();

  const payloadController = (payload)=>{
    console.log(payload)
    setPayload(payload)
  }


  return (
    <div className=' '>
    <LoginHeader/>
  {payload.count == 0 && <SignupLocation payload={payload} payloadController={payloadController}/>}
  {payload.count == 1 && <SignupEmail payload={ payload} payloadController={payloadController}/>}
  {payload.count == 2 && <SignupClientF payload={payload} payloadController={payloadController}/>}
 </div>
  );
}

export default Signup;
