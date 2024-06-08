import axios from "axios";

export async function userAssets() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`;
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
export async function usersAssets() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`;
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
export async function userTrades() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-trades`;
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
