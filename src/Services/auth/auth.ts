import { addUserProps, loginProps } from "@/Utils/type";
import axios from "axios";

export async function addUser(addUser: addUserProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;
  if (!addUser.promoCode) {
    addUser.promoCode = "";
  }

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
        firstName: addUser.firstName,
        lastName: addUser.lastName,
        pseudo: addUser.pseudo,
        city: addUser.city,
        email: addUser.email,
        password: addUser.password,
        promoCode: addUser.promoCode,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
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
      throw new Error(e);
    });
}
