import { useContext } from "react"
import { AuthContext } from "../app/providers/index"

const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error("Not Found")
  }

  return authContext
}

export default useAuth
