"use client";
import "@/Components/style.css";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import Header from "@/Components/Header/Header";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import Paragraph from "@/Components/Paragraph/paragraph";
import ErrorMsg from "@/Components/errorMsg/ErrorMsg";
import Blur from "@/Components/style/blur";
import { login } from "@/Services/auth/auth";
import { loginProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputForm from "@/Components/Inputs/inputForm";
import { Triangle } from "react-loader-spinner";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginProps>();

  const onSubmit: SubmitHandler<loginProps> = async (data) => {
    const response = await login(data);
    if (response?.status === 200) {
      setIsLoading(true);
      window.localStorage.setItem("token", response.data.access_token);
      toast.success("succes");
      push("/home");
    }
  };
  return (
    <div>
      <Header>
        <Logo />
      </Header>
      <Main additionalCss="styleBgImageMain min-h-screen bg-cover mt-4 relative flex justify-center items-center">
        <Blur additionalCss="w-full top-0 h-56 z-10 bg-gradient-to-b from-black " />
        <Blur additionalCss="w-full bottom-0 h-56  z-10 bg-gradient-to-t from-black  " />
        <Form
          onSubmit={handleSubmit(onSubmit)}
          additionalCss="gap-10 bg-black relative z-20 p-4 rounded-lg border-2 border-white"
        >
          <Paragraph
            additionalCss={"styleTitle relative z-10 text-3xl text-orange-500"}
            content={"Sign in"}
          />
          <div className=" flex flex-col justify-center items-center">
            <InputForm
              content={"Email"}
              type={"email"}
              labelCss="styleEmail relative z-10 text-orange-300 text-center"
              inputCss="relative bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
              errors={
                errors.email && <ErrorMsg additionalCss="relative z-10 mt-2" />
              }
              verifInput={register("email", { required: true })}
            />
            <InputForm
              content={"Password"}
              type={"password"}
              labelCss="styleEmail relative z-10 text-orange-300 mt-10 text-center "
              inputCss="relative z-10 text-center border-2 border-orange-600"
              verifInput={register("password", { required: true })}
              errors={
                errors.password && (
                  <ErrorMsg additionalCss="relative z-10 mt-2" />
                )
              }
            />
          </div>
          <input
            type="submit"
            className="styleSubmit relative z-20 px-5 py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
            value={"Sign In"}
          />
        </Form>
      </Main>
      <Footer>
        <Paragraph additionalCss="" content={"Copyright-2024"} />
      </Footer>
      <Triangle
        visible={isLoading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="fixed z-20 top-20 right-20"
      />
    </div>
  );
};

export default page;
