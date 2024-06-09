"use client";
import "../../../Components/style.css";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import Header from "@/Components/Header/Header";
import ImageComponent from "@/Components/Image/ImageComponent";
import InputForm from "@/Components/InputForm/InputForm";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import Paragraph from "@/Components/Paragraph/paragraph";
// import ValidForm from "@/Components/ValidForm/ValidForm";
import ErrorMsg from "@/Components/errorMsg/ErrorMsg";
import Blur from "@/Components/style/blur";
import { login } from "@/Services/auth/auth";
import { loginProps } from "@/Utils/type";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const page = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginProps>();

  const onSubmit: SubmitHandler<loginProps> = async (data) => {
    setErrorMsg("");
    const response = await login(data);
    try {
      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.access_token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header>
        <Logo />
      </Header>
      <Main additionalCss="min-h-screen bg-cover mt-4 relative flex justify-center items-center">
        <Blur additionalCss="w-full top-0 h-20 z-10 bg-gradient-to-b from-black to-blue opacity-90" />
        <ImageComponent
          width={900}
          height={900}
          source={"/bg1.jpg"}
          content={"background"}
          additionalCss={"h-screen w-screen absolute z-0 select-none"}
        />
        <Blur additionalCss="w-full bottom-0 h-20  z-10 bg-gradient-to-t from-black  opacity-90" />
        <Form
          onSubmit={handleSubmit(onSubmit)}
          additionalCss="gap-10 bg-black relative z-20 p-4 rounded-lg border-2 border-white"
        >
          <Paragraph
            additionalCss={"relative z-10 text-3xl text-orange-500"}
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
          {/* <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-700 to-pink-700 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  "> */}
          {/* <ValidForm content={"Sign in"} /> */}

          <input
            type="submit"
            className="styleSubmit relative z-20 px-5 py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
            value={"Sign In"}
          />
          {/* </div> */}
        </Form>
      </Main>
      <Footer>
        <Paragraph additionalCss="" content={"Copyright-2024"} />
      </Footer>
    </div>
  );
};

export default page;
