import {
  addCryptoProps,
  buyCryptoProps,
  sellCryptoProps,
  updateCryptoProps,
} from "@/Utils/type";
import axios from "axios";

export async function allCrypto() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;
  const axiosConfig = {
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
export async function historyCrypto(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${id}`;
  const axiosConfig = {
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
export async function searchCrypto(name: string) {
  let url: string;
  if (name === "") {
    return allCrypto();
  } else {
    url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;
  }
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
      console.log(e);
      throw new Error(e);
    });
}
export async function addCrypto(addCrypto: addCryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: addCrypto.name,
        value: addCrypto.value,
        image: addCrypto.image,
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
export async function sellCrypto(sellCrypto: sellCryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/sell`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: sellCrypto.id_crypto,
        amount: sellCrypto.amount,
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
export async function buyCrypto(cryptoid: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: cryptoid,
        amount: amount,
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

export async function updateCrypto(updateCrypto: updateCryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/${updateCrypto.id}`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      {
        name: updateCrypto.name,
        value: updateCrypto.value,
        image: updateCrypto.image,
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

export async function deleteCrypto(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/delete/${id}`;
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
