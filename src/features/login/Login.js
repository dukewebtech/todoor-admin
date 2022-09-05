import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { Button, TextField } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";

function Login(props) {
  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().label("Username").trim().required(),
      password: yup.string().label("Username").trim().required(),
    }),
    onSubmit: async (values) => {
      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  if (authUser.accessToken) {
    return <Navigate to={RouteEnum.HOME} />;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Username"
          {...getTextFieldFormikProps(formik, "username")}
        />
        <PasswordTextField
          label="Password"
          {...getTextFieldFormikProps(formik, "password")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
