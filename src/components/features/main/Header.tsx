import useAuth from "@/hooks/useAuth"
import useLogin from "@/hooks/useLogin"
import useLogout from "@/hooks/useLogout"
import { Button } from "@mui/material"
import { GoogleAuthProvider } from "firebase/auth"
import React from "react"
import { toast } from "react-toastify"
import { auth } from "../../../../firebase.config"

interface HeaderProps {
  refetch: () => void
}

const Header = ({ refetch }: HeaderProps) => {
  const { user, login } = useAuth()
  const { mutate: mutateLogin } = useLogin()
  const { mutate: mutateLogout } = useLogout()

  const handleLogin = () => {
    const provider = new GoogleAuthProvider()

    mutateLogin(provider, {
      onSuccess: (res) => {
        login(res.user)
        refetch()
      },
      onError: () => {
        toast.error("Fail to log in.")
      },
    })
  }

  const handleLogout = () => {
    mutateLogout(auth, {
      onSuccess: () => {
        login(null)
        refetch()
      },
      onError: () => {
        toast.error("Fail to log out.")
      },
    })
  }

  return (
    <header className="header">
      <h1 className="ogsm-title">
        {user?.displayName ? `${user.displayName}'s OGSM` : "You can do it!"}
      </h1>
      <Button variant="text" onClick={user ? handleLogout : handleLogin}>
        {user ? "로그아웃" : "로그인"}
      </Button>
    </header>
  )
}

export default Header
