/**
 * @alias addUser
 */
export type addUserProps = {
  firstName: string;
  age: number;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  password: string;
  rePassword: string;
  promoCode?: string;
};
/**
 * @alias responseAddUser
 */
export type userRegisterProps = {
  id: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  // hash: null,
  email: string;
  roleId: string;
  isActive: boolean;
  city: string;
  dollarAvailables: number;
  created_at: string;
  updated_at: string;
};
/**
 * @alias login
 */
export type loginProps = {
  email: string;
  password: string;
};
/**
 * @alias responseLogin
 */
export type userLoginProps = {
  id: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  // hash: null,
  email: string;
  roleId: string;
  isActive: boolean;
  city: string;
  dollarAvailables: number;
  created_at: string;
  updated_at: string;
  UserHasCrypto: [];
  Role: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
};

export type addPromoCodeProps = {
  name: string;
  value: number;
  id: string;
};
export type cryptoProps = {
  id: string;
  name: string;
  value: number;
  image: string;
  quantity: number;
  created_at: string;
  updated_at: string;
};

export type addCryptoProps = {
  name: string;
  value: number;
  image: string;
};
export type sellCryptoProps = {
  id_crypto: string;
  amount: number;
};
export type buyCryptoProps = {
  id: string;
  amount?: number;
};

export type updateCryptoProps = {
  name: string;
  value: number;
  image: string;
  id: string;
};
export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: cryptoProps;
};

export type addTradeProps = {
  id_giver: string;
  id_receiver: string;
  id_crypto: string;
  amount_traded: number;
  id_offer: string;
};

export type updateTradeProps = {
  id: string;
  id_giver: string;
  id_receiver: string;
  id_crypto: string;
  amount_traded: number;
  id_offer: string;
};

export type addOfferProps = {
  id_crypto: string;
  amount: number;
};

export type updateOfferProps = {
  id: string;
  id_crypto: string;
  amount: number;
};
export type addRoleProps = {
  name: string;
};
export type updateRoleProps = {
  id: string;
  name: string;
};

// export enum Roles {
//   admin = "ADMIN",
//   user = "USER",
// }

export type usersAssetsProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  dollarAvailables: number;
  UserHasCrypto: [
    {
      Crypto: {
        id: string;
        name: string;
        value: number;
        image: string;
        quantity: number;
        created_at: string;
        updated_at: string;
      };
      amount: number;
    }
  ];
};
export type historyCryptoProps = {
  created_at: string;
  id: string;
  id_crypto: string;
  updated_at: string;
  value: number;
};
// export type amountCryptHasUser = {
//    amount: number
// }
// export type userCryptoAssetsProps = {
//   UserHasCrypto: {
//     Crypto: {
//       id: string;
//       name: string;
//       value: number;
//       image: string;
//       quantity: number;
//       created_at: string;
//       updated_at: string;
//     };
//     amount: number;
//   };
// };
// export type userAssetsContextProps = {
//   userAsset: any;
// };
