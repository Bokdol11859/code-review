import { FormLabel, TextField } from "@mui/material"
import React, { ChangeEvent } from "react"
import { FORM_TYPE } from "../modal/OgsmModal"

interface TextFieldFormProps {
  id: string
  label: string
  required: boolean
  invalid: boolean
  errorText: string
  autoFocus: boolean
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextFieldForm = ({
  id,
  label,
  required,
  invalid,
  errorText,
  autoFocus,
  value,
  placeholder,
  onChange,
}: TextFieldFormProps) => {
  return (
    <>
      <FormLabel
        required={required}
        htmlFor={id}
        className="ogsm-modal-form-title"
      >
        {label}
      </FormLabel>
      <TextField
        error={invalid}
        helperText={invalid ? errorText : ""}
        autoFocus={autoFocus}
        hiddenLabel
        value={value}
        id={id}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        multiline
        rows={3}
        onChange={onChange}
      />
    </>
  )
}

export default TextFieldForm
