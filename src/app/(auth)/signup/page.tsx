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
import { addUser, login } from "@/Services/auth/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addUserProps } from "@/Utils/type";
import { apiCityProps, cityProps } from "@/Utils/typeComponent";
import { getCity } from "@/Services/apiCity/apiCity";
import * as yup from "yup";
import { schema } from "@/Validator/validatorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "@/Components/Inputs/inputForm";
import { Triangle } from "react-loader-spinner";

const page = () => {
  const { push } = useRouter();
  const [city, setCity] = useState<apiCityProps[]>([]);
  const [searchCity, setSearchCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<addUserProps>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function getDataCity() {
      const response = await getCity(watch("city"));
      if (response?.status === 200) {
        setCity(response.data);
      }
    }
    getDataCity();
  }, [watch("city")]);

  const onSubmit: SubmitHandler<addUserProps> = async (data) => {
    if (
      city.length < 1 ||
      city.find((element) => {
        element.nom !== searchCity;
      })
    ) {
      return toast.error("Not found city");
    }
    if (data.password !== data.rePassword) {
      return toast.error("Passwords not must be similar", {
        autoClose: 5000,
      });
    }
    setIsLoading(true);
    const response = await addUser(data);
    if (response?.status === 201) {
      window.localStorage.setItem("token", response.data.access_token);
      toast.success("succes");
      push("/signin");
    }
    return setIsLoading(false);
  };
  return (
    <div>
      <Triangle
        visible={isLoading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="fixed z-20 top-20 right-20"
      />
      <Header>
        <Logo />
      </Header>
      <Main additionalCss="styleBgImageMain min-h-screen bg-cover mt-8 relative flex justify-center items-center">
        <Blur additionalCss="w-full top-0 h-56 z-10 bg-gradient-to-b from-black " />
        <Blur additionalCss="w-full bottom-0 h-56 z-10 bg-gradient-to-t from-black  " />
        <Form
          onSubmit={handleSubmit(onSubmit)}
          additionalCss="gap-6 bg-black relative z-20 p-4 rounded-lg border-2 border-white"
        >
          <Paragraph
            additionalCss={"styleTitle relative z-10 text-3xl text-orange-500"}
            content={"Sign up"}
          />
          <div className="flex flex-col justify-center items-center">
            <div className="md:flex  md:gap-8">
              <InputForm
                content={"Your firstName"}
                type={"text"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("firstName")}
                errors={errors.firstName?.message}
              />
              <InputForm
                content={"Your lastName"}
                type={"text"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("lastName")}
                errors={errors.lastName?.message}
              />
            </div>
            <div className="md:flex  md:gap-8">
              <InputForm
                content={"Your pseudo"}
                type={"text"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("pseudo")}
                errors={errors.pseudo?.message}
              />
              <InputForm
                content={"Your age"}
                type={"number"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("age")}
                errors={errors.age?.message}
              />
            </div>
            <div className="md:flex  md:gap-8">
              <InputForm
                content={"Your Email"}
                type={"email"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("email")}
                errors={errors.email?.message}
              />
              <InputForm
                content={"Your city"}
                type={"text"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("city")}
                errors={errors.city?.message}
                listData={city}
                // change={setSearchCity}
              />
            </div>
            <div className="md:flex md:justify-center md:items-center md:gap-8">
              <InputForm
                content={"Your Password"}
                type={"password"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center "
                inputCss="relative py-0 z-10 text-center border-2 border-orange-600"
                verifInput={register("password")}
                errors={errors.password?.message}
              />
              <InputForm
                content={"Your Confirm Password"}
                type={"password"}
                labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
                inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
                verifInput={register("rePassword", { required: true })}
                errors={
                  errors.rePassword && (
                    <ErrorMsg
                      content={errors.rePassword.message}
                      additionalCss="relative z-10 mt-2"
                    />
                  )
                }
              />
            </div>
            <InputForm
              content={"Your promo Code"}
              type={"text"}
              labelCss="styleEmail mt-3 relative z-10 text-orange-300 text-center"
              inputCss="relative py-0 bg-slate-300 text-center text-orange-500 border-2 border-orange-600 z-10 "
              verifInput={register("promoCode")}
              errors={errors.promoCode?.message}
            />
          </div>
          <input
            type="submit"
            className="styleSubmit relative z-20 px-5 py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
            value={"Sign up"}
          />
        </Form>
      </Main>
      <Footer>
        <Paragraph additionalCss="" content={"© Copyright - 2024"} />
      </Footer>
    </div>
  );
};

export default page;
