import { FormLabel } from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers"
import { Moment } from "moment"
import React, { useEffect, useState } from "react"

interface DatePickerFormProps {
  label: string
  value: Moment | null
  onChange: (newDate: Moment | null) => void
}

const DatePickerForm = ({ label, value, onChange }: DatePickerFormProps) => {
  const [clearedDate, setClearedDate] = useState<boolean>(false)

  useEffect(() => {
    if (clearedDate) {
      const timeout = setTimeout(() => {
        setClearedDate(false)
      }, 0)
      return () => clearTimeout(timeout)
    }
    return () => {}
  }, [clearedDate])

  return (
    <>
      <FormLabel className="ogsm-modal-form-title">{label}</FormLabel>
      <DesktopDatePicker
        value={value}
        onChange={onChange}
        format="YYYY/MM/DD"
        slotProps={{
          field: {
            clearable: true,
            onClear: () => setClearedDate(true),
          },
        }}
      />
    </>
  )
}

export default DatePickerForm
