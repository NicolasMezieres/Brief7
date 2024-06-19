import * as yup from "yup";

export const schema = yup.object({
  firstName: yup
    .string()
    .required("This field is required")
    .min(3, "Need minimum 3 character"),
  lastName: yup
    .string()
    .required("This field is required")
    .min(3, "Need minimum 3 character"),
  pseudo: yup
    .string()
    .required("This field is required")
    .min(3, "Need minimum 3 character"),
  city: yup.string().required("This field is required"),
  email: yup.string().email("email valid").required("This field is required"),
  password: yup
    .string()
    .matches(/[a-z]/, "You need a lowercase")
    .matches(/[A-Z]/, "You need an Uppercase")
    .matches(/[1-9]/, "You need a number")
    .matches(/[@!?]/, "You need special character")
    .min(8, "minimum 8 ")
    .required("This field is required"),
  rePassword: yup.string().required("This field is required"),
  promoCode: yup.string(),
  age: yup
    .number()
    .min(18, "Invalid age. You must be 18 years or older")
    .required("This field is required"),
});
export const schemaCrypto = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .min(1, "name must be longer than or equal to 1 characters"),
  value: yup
    .number()
    .required("This field is required")
    .positive("value must be a positive number")
    .min(1, "value must not be less than 1")
    .max(10000, "value must not be greater than 10000"),
  quantity: yup
    .number()
    .required("This field is required")
    .positive("value must be a positive number")
    .min(1, "value must not be less than 1")
    .max(10000, "value must not be greater than 10000"),
  image: yup
    .string()
    .required("This field is required")
    .url("Image must be an url"),
});
export const schemaPromoCode = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .min(1, "name must be longer than or equal to 1 characters")
    .max(50, "name must be shorter than or equal to 50 characters"),
  value: yup
    .number()
    .required("This field is required")
    .min(1, "value must not be less than 1")
    .max(3000, "value must not be greater than 3000")
    .positive("value must be a positive number"),
});
