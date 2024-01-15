"use client"
import React, { useEffect, useState } from "react"
import { Container } from "@mui/material"
import useGetOgsm from "@/hooks/useGetOgsm"
import useAuth from "@/hooks/useAuth"
import { getAuth } from "firebase/auth"
import "react-toastify/dist/ReactToastify.css"
import Header from "@/components/features/main/Header"
import Content from "@/components/features/main/Content"

const Main = () => {
  const { user, login } = useAuth()
  const { data: ogsmList, refetch } = useGetOgsm({ email: user?.email })
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true)
  const authService = getAuth()

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        login(user)
      }
      setIsLoadingUser(false)
    })
  }, [])

  if (isLoadingUser) {
    return <div />
  }

  return (
    <Container maxWidth="md">
      <main>
        <Header refetch={() => refetch()} />
        <Content ogsmList={ogsmList} refetch={() => refetch()} />
      </main>
    </Container>
  )
}

export default Main
