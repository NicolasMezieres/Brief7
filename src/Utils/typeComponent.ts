import { cryptoProps, usersAssetsProps } from "./type";

export type headerProps = {
  children: React.ReactNode;
  additionalCss?: string;
};
export type mainProps = {
  additionalCss?: string;
  children: React.ReactNode;
};
export type footerProps = {
  additionalCss?: string;
  children: React.ReactNode;
};

export type paraProps = {
  additionalCss?: string;
  content: string;
};

export type imageProps = {
  width: number;
  height: number;
  source: string;
  additionalCss?: string;
  content: string;
};

export type formProps = {
  children: React.ReactNode;
  additionalCss?: string;
  onSubmit: any;
};
// <T extends FieldValues>
export type cryptoFormProps = {
  name: string;
  value: number;
  image: string;
  quantity: number;
};
export type promoCodeFormProps = {
  name: string;
  value: number;
};
export type inputFormProps = {
  content: string;
  type: string;
  labelCss?: string;
  inputCss?: string;
  verifInput?: any;
  errors?: any;
  listData?: apiCityProps[];
  change?: Function;
  autoComplete?: string;
  defaultValue?: string | number;
};
export type inputNumberProps = {
  value: number;
  valueMax?: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  inputCss?: string;
  labelCss?: string;
  content: string;
};
export type promoCodeProps = {};
export type inputSearchProps = {
  placeholder: string;
  valueChange: React.Dispatch<React.SetStateAction<string>>;
  divAdditionalCss?: string;
  textAdditionalCss?: string;
  submitAdditionalCss?: string;
};
export type apiCityProps = {
  [x: string]: any;
  codePostal: string;
  lon: number;
  lat: number;
  nom: string;
  boost: string;
  code: string;
  siren: string;
  codeEpci: string;
  codeDepartement: string;
  codeRegion: string;
  zone: [string];
  type: [string];
  fields: [string];
  format: string;
  geometry: string;
};
export type cityProps = {
  nom: string;
};

// verifInput: UseFormRegister<T>;
// errors: FieldErrors<T>;

export type buttonProps = {
  content: string;
  additionalCss?: string;
};
export type blurProps = {
  additionalCss?: string;
};
export type ErrorMsgProps = {
  additionalCss?: string;
  content?: any;
};

export type CardContainerProps = {
  children: React.ReactNode;
  additionalCss?: string;
};
export type CardCryptoProps = {
  cryptoProps: cryptoProps;
  additionalCss: string;
  User: usersAssetsProps;
};
export type WalletUserProps = {
  user: usersAssetsProps;
  totalDollar?: number;
};
export type inputSubmitProps = {
  content: string;
  onClick: Function;
  additionalCss?: string;
};
export type modalAddOfferProps = {
  crypto: cryptoProps;
  content: string;
  additionalCss?: string;
  maxValue?: number;
};
