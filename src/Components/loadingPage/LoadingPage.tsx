import React from 'react'
import { Triangle } from 'react-loader-spinner'

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="fixed z-20 top-24 right-20"
      />
      </div>
  )
}

export default LoadingPage
