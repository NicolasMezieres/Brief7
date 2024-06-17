import { addTradeProps, updateTradeProps } from "@/Utils/type";
import axios from "axios";

export async function allTrade() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/all`;
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

export async function addTrade(id_offer: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`;
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
        id_offer: id_offer,
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

export async function updateTrade(data: updateTradeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/update/${data.id}`;
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
        id_giver: data.id_giver,
        id_receiver: data.id_receiver,
        id_crypto: data.id_crypto,
        amount_traded: data.amount_traded,
        id_offer: data.id_offer,
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

export async function deleteTrade(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/delete/${id}`;
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
