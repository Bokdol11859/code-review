"use client"
import React from "react"
import { ToastContainer } from "react-toastify"
import Main from "./main/page"

const Home = () => {
  return (
    <>
      <Main />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default Home
