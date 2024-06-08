import {
  addCryptoProps,
  buyCryptoProps,
  updateCryptoProps,
} from "@/Utils/type";
import axios from "axios";

export async function allCrypto() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;
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
export async function searchCrypto(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${id}`;
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

export async function buyCrypto(buyCrypto: buyCryptoProps) {
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
        id_crypto: buyCrypto.id_crypto,
        amount: buyCrypto.amount,
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
