import useAuth from "@/hooks/useAuth"
import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import React from "react"

interface OgsmAddButtonProps {
  onClick: () => void
}

const OgsmAddButton = ({ onClick }: OgsmAddButtonProps) => {
  const { user } = useAuth()

  return user ? (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={<Add />}
      className="ogsm-add-button"
    >
      OGSM
    </Button>
  ) : null
}

export default OgsmAddButton
