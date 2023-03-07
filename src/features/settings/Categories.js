import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import { BsFillCircleFill, BsPeople } from "react-icons/bs";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import customer from "images/tabler_helmet.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
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

import ToDoorSearch from "common/ToDoorSearch";
import moment from "moment";
import { post } from "services/fetch";
function Categories(props) {
  const [age, setAge] = React.useState("");
  const [categoryName, setCategoryName] = useState(false);
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  const getCategoriesQueryResult = UserApi.useGetCategoriesQuery({age:age});
  const categories = getCategoriesQueryResult?.data;

  console.log(categories);

  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

    const createCategories = async () => {
        let payload = {name:categoryName}
      const res = await post({
        endpoint: `api/category`,
         body: { ...payload },
        auth: true,
      });
        enqueueSnackbar("Category Created successfully", { variant: "success" });

      setAge(!age)
      setCategoryName('')
    };

  const tableArray = categories?.map((e) => ({
    name: e?.name,
    date: e?.createdAt,
    key: e?._id,
  }));

  const authUser = useAuthUser();
  console.log(categoryName)

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  return (
    <div>
      <ToDoorSearch />

      {
        <div>
          <div className="mb-4 flex">
            <Typography
              style={{ borderBottom: "2px solid #0C3BAA" }}
              className="mr-4 p-1 font-bold"
            >
              CATEGORIES
            </Typography>
            {/* <div className="flex items-center">
              <p className="p-1">Unread</p>
              <BsFillCircleFill color="blue" fontSize={6} />
            </div> */}
          </div>

          <div className="flex w-full gap-5">
            <div className="w-2/5">
              <TextField
                label="Category Name"
                placeholder="Enter Category Name"
                className="w-full mt-8"
                onChange={(e)=>setCategoryName(e.target.value)}
              />
              <Button onClick={createCategories} className="mt-4">
                Create
              </Button>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <Typography className="font-bold text-base">
                  Category Name
                </Typography>
                <Typography className="font-bold text-base">
                  Date Created
                </Typography>
              </div>
              {tableArray?.map((e) => (
                <div
                  style={{ border: "1px solid #DADADA" }}
                  className=" px-5 mt-1 py-2 flex justify-between border2 background-table"
                >
                  <div className="w-full flex">
                    {/* <img src={gigLogo} className="rounded-full" /> */}
                    <div className="w-full  justify-between">
                      <div className="flex justify-between">
                        <Typography variant="">{e?.name}</Typography>

                        <Typography variant="">
                          {moment(e?.createdAt).format("ll")}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Categories;
