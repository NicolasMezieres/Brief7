import { addPromoCodeProps } from "@/Utils/type";
import axios from "axios";

export async function allPromoCode() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function addPromoCode(addPromoCodeProps: addPromoCodeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`;
  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: addPromoCodeProps.name,
        value: addPromoCodeProps.value,
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

export async function updatePromoCode(addPromoCodeProps: addPromoCodeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${addPromoCodeProps.id}`;
  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      {
        name: addPromoCodeProps.name,
        value: addPromoCodeProps.value,
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
export async function deletePromoCode(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/delete/${id}`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
