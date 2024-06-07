/**
 * @alias signup
 */
export type createdUserProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  password: string;
  promoCode?: string;
};
/**
 * @alias login
 */
export type loginUserProps = {
  email: string;
  password: string;
};
