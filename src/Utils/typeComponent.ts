import { MultipleFieldErrors } from "react-hook-form";

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
export type inputProps = {
  content: string;
  type: string;
  labelCss?: string;
  inputCss?: string;
  verifInput: any;
  errors: any;
};
export type buttonProps = {
  content: string;
  additionalCss?: string;
};
export type blurProps = {
  additionalCss?: string;
};
export type ErrorMsgProps = {
  additionalCss?: string;
};
