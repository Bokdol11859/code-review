import { useState } from "react"

type MUTATION_FN_TYPE = {
  onSuccess: (params?: any) => void
  onError: () => void
}

const useLogout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const mutate = async (data: any, mutationFn: MUTATION_FN_TYPE) => {
    const auth = data
    const { onSuccess, onError } = mutationFn
    setIsLoading(true)

    try {
      const response = await auth.signOut()
      onSuccess()
    } catch (error) {
      setError(error)
      onError()
    } finally {
      setIsLoading(false)
    }
  }

  return { mutate, isLoading, error }
}

export default useLogout
