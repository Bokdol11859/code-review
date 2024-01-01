import { OGSM_TYPE } from "@/types"
import { useState } from "react"
import { db } from "../../firebase.config"
import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore"
import useAuth from "./useAuth"

type DATA_TYPE = {
  newOgsm: OGSM_TYPE
}

type MUTATION_FN_TYPE = {
  onSuccess: () => void
  onError: () => void
}

const useSaveOgsm = () => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const mutate = async (data: DATA_TYPE, mutationFn: MUTATION_FN_TYPE) => {
    const { newOgsm } = data
    const { onSuccess, onError } = mutationFn
    const id = user.email.replace("@", "")
    setIsLoading(true)

    try {
      const collectionRef = collection(db, "user")
      const docRef = doc(collectionRef, id)
      await updateDoc(docRef, {
        ogsm: arrayUnion(newOgsm),
      })
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

export default useSaveOgsm
