import React, { useState } from "react"
import { OGSM_TYPE } from "@/types"
import useAuth from "./useAuth"
import { collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"

type DATA_TYPE = {
  id?: number
  ogsmList: OGSM_TYPE[]
  newOgsm?: OGSM_TYPE
}

type MUTATION_FN_TYPE = {
  onSuccess: () => void
  onError: () => void
}

interface useMutationProps {
  method: "GET" | "POST" | "PUT" | "DELETE"
}

const useMutation = ({ method }: useMutationProps) => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const mutate = async (data: DATA_TYPE, mutationFn: MUTATION_FN_TYPE) => {
    const { id: ogsmId, ogsmList, newOgsm } = data
    const { onSuccess, onError } = mutationFn
    const userId = user.email.replace("@", "")
    setIsLoading(true)

    try {
      const collectionRef = collection(db, "user")
      const docRef = doc(collectionRef, userId)
      let updatedOgsm

      if (method === "DELETE") {
        updatedOgsm = ogsmList.filter((ogsm) => ogsm.id !== ogsmId)
      }

      if (method === "POST") {
        updatedOgsm = ogsmList.map((ogsm) => {
          if (ogsm.id === newOgsm?.id) {
            return { ...ogsm, ...newOgsm }
          }
          return ogsm
        })
      }

      await updateDoc(docRef, { ogsm: updatedOgsm })
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

export default useMutation
