import useAuth from "@/hooks/useAuth"
import React, { useState } from "react"
import OgsmList from "./OgsmList"
import { OGSM_TYPE } from "@/types"
import OgsmModal from "@/components/blocks/modal/OgsmModal"
import useSaveOgsm from "@/hooks/useSaveOgsm"
import useMutation from "@/hooks/useMutation"
import { toast } from "react-toastify"
import OgsmAddButton from "@/components/blocks/button/OgsmAddButton"

interface ContentProps {
  ogsmList: OGSM_TYPE[]
  refetch: () => void
}

const Content = ({ ogsmList, refetch }: ContentProps) => {
  const { mutate: mutateSaveOgsm } = useSaveOgsm()
  const { mutate: mutateDeleteOgsm } = useMutation({ method: "DELETE" })
  const { mutate: mutateUpdateOgsm } = useMutation({ method: "POST" })
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<OGSM_TYPE | undefined>(
    undefined
  )

  const handleOpenModal = (id?: number) => {
    if (id) {
      const item = ogsmList.find((ogsm) => ogsm.id === id)
      setSelectedItem(item)
    }
    setIsOpen(true)
  }

  const onDelete = (id: number) => {
    mutateDeleteOgsm(
      { id, ogsmList },
      {
        onSuccess: () => {
          refetch()
          toast.success("Deleted the data.")
        },
        onError: () => {
          toast.error("Fail to delete the data.")
        },
      }
    )
  }

  const onSave = (newOgsm: OGSM_TYPE) => {
    const existingOgsmIndex = ogsmList.findIndex(
      (ogsm) => ogsm.id === newOgsm.id
    )

    if (existingOgsmIndex !== -1) {
      mutateUpdateOgsm(
        { ogsmList, newOgsm },
        {
          onSuccess: () => {
            refetch()
            toast.success("Saved the changes.")
          },
          onError: () => {
            toast.error("Fail to save the changes.")
          },
        }
      )
    } else {
      mutateSaveOgsm(
        { newOgsm },
        {
          onSuccess: () => {
            refetch()
            toast.success("Added the data.")
          },
          onError: () => {
            toast.error("Fail to add the data.")
          },
        }
      )
    }
  }

  return (
    <>
      <OgsmAddButton onClick={() => setIsOpen(true)} />
      <OgsmList
        ogsmList={ogsmList}
        onOpenModal={handleOpenModal}
        onSave={onSave}
      />
      <OgsmModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ogsm={selectedItem}
        ogsmList={ogsmList}
        onDelete={onDelete}
        onSave={onSave}
        setSelectedItem={setSelectedItem}
      />
    </>
  )
}

export default Content
