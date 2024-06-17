import { addUserProps, loginProps } from "@/Utils/type";
import axios from "axios";
import { toast } from "react-toastify";

export async function addUser(addUser: addUserProps) {
  console.log(addUser);
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;
  if (!addUser.promoCode) {
    addUser.promoCode = "";
  }

  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        firstName: addUser.firstName,
        lastName: addUser.lastName,
        pseudo: addUser.pseudo,
        city: addUser.city,
        email: addUser.email,
        password: addUser.password,
        promoCode: addUser.promoCode,
        age: Number(addUser.age),
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(addUser.age, "valeur", typeof addUser.age, "typage");
      toast.error(e.response.data.message, { autoClose: 5000 });
      // throw new Error(e);
    });
}
export async function login(loginProps: loginProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: loginProps.email,
        password: loginProps.password,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      // toast.error(e.response.data.message, { autoClose: 5000 });
      // throw new Error(e);
    });
}
