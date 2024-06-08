/**
 * @alias addUser
 */
export type addUserProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  password: string;
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

export type addCryptoProps = {
  name: string;
  value: number;
  image: string;
};

export type buyCryptoProps = {
  id_crypto: string;
  amount: number;
};

export type updateCryptoProps = {
  name: string;
  value: number;
  image: string;
  id: string;
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
