import { FormLabel, Switch } from "@mui/material"
import React, { ChangeEvent } from "react"

interface SwitchFormProps {
  label: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SwitchForm = ({ label, checked, onChange }: SwitchFormProps) => {
  return (
    <>
      <FormLabel className="ogsm-modal-form-title">{label}</FormLabel>
      <Switch checked={checked} onChange={onChange} />
    </>
  )
}

export default SwitchForm
