import { usersAssetsProps } from "@/Utils/type";
import { createContext } from "react";

// export const ContextMyAssets = createContext<usersAssetsProps>({
//   firstName: "",
//   lastName: "",
//   pseudo: "",
//   dollarAvailables: 0,
//   UserHasCrypto: [
//     {
//       Crypto: {
//         id: "",
//         name: "",
//         value: 0,
//         image: "",
//         quantity: 0,
//         created_at: "",
//         updated_at: "",
//       },
//       amount: 0,
//     },
//   ],
// });
export type loading = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type reloadNeeded = {
  isReloadNeeded: boolean;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ContextReloadNeeded = createContext<reloadNeeded>({
  isReloadNeeded: false,
  setIsReloadNeeded: () => {},
});
export const Contextloading = createContext<loading>({
  isLoading: false,
  setIsLoading: () => {},
});
