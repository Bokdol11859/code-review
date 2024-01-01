import { OGSM_TYPE } from "@/types"
import { FormControlLabel, Switch } from "@mui/material"
import React, { ChangeEvent } from "react"

interface SwitchInListFormProps {
  ogsm: OGSM_TYPE
  onSave: (ogsm: OGSM_TYPE) => void
}

const SwitchInListForm = ({ ogsm, onSave }: SwitchInListFormProps) => {
  const handleChangeDone = (
    e: ChangeEvent<HTMLInputElement>,
    ogsm: OGSM_TYPE
  ) => {
    const { checked } = e.target
    onSave({
      ...ogsm,
      isDone: checked,
    })
  }

  return (
    <FormControlLabel
      control={
        <Switch
          checked={ogsm?.isDone || false}
          onChange={(e) => handleChangeDone(e, ogsm)}
        />
      }
      label={ogsm?.isDone ? "Done" : "In progress"}
      labelPlacement='start'
    />
  )
}

export default SwitchInListForm
