import React from "react"
import { List } from "@mui/material"
import OgsmItem from "./OgsmItem"
import { OGSM_TYPE } from "@/types"
import useAuth from "@/hooks/useAuth"

interface OgsmListProps {
  onOpenModal: (id?: number) => void
  ogsmList: OGSM_TYPE[]
  onSave: (ogsm: OGSM_TYPE) => void
}

const OgsmList = ({ onOpenModal, ogsmList, onSave }: OgsmListProps) => {
  const { user } = useAuth()

  return user && ogsmList.length > 0 ? (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {ogsmList.map((ogsm: OGSM_TYPE) => {
        return (
          <OgsmItem
            ogsm={ogsm}
            onOpenModal={onOpenModal}
            onSave={onSave}
            key={ogsm.id}
          />
        )
      })}
    </List>
  ) : (
    <p className="ogsm-no-data">
      {user ? "No data available." : "Please use after logging in."}
    </p>
  )
}

export default OgsmList
