import axios from "axios";
export async function getUserAssets() {
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
      return e;
    });
}
export async function getUsersAssets() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e
    });
}
export async function getUserTrades() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-trades`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
