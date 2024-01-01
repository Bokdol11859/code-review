import React, { useState, useEffect, ChangeEvent, useMemo } from "react"
import {
  Button,
  FormLabel,
  Modal,
  Paper,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers"
import { OGSM_TYPE } from "@/types"
import moment, { Moment } from "moment"
import TextFieldForm from "../form/TextFieldForm"
import DatePickerForm from "../form/DatePickerForm"
import SwitchForm from "../form/SwitchForm"

interface AddItemModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  ogsm?: OGSM_TYPE
  ogsmList: OGSM_TYPE[]
  onDelete: (id: number) => void
  onSave: (newOgsm: OGSM_TYPE) => void
  setSelectedItem: (id: undefined) => void
}

export type FORM_TYPE =
  | "objective"
  | "goal"
  | "strategy"
  | "measure"
  | "startDate"
  | "endDate"

const OgsmModal = ({
  isOpen,
  setIsOpen,
  ogsm,
  ogsmList,
  onDelete,
  onSave,
  setSelectedItem,
}: AddItemModalProps) => {
  const [objective, setObjective] = useState<string>(ogsm?.objective || "")
  const [goal, setGoal] = useState<string>(ogsm?.goal || "")
  const [strategy, setStrategy] = useState<string>(ogsm?.strategy || "")
  const [measure, setMeasure] = useState<string>(ogsm?.measure || "")
  const [startDate, setStartDate] = useState<Moment | null>(null)
  const [endDate, setEndDate] = useState<Moment | null>(null)
  const [isDone, setIsDone] = useState<boolean>(ogsm?.isDone || false)
  const [formInvalids, setFormInvalids] = useState<FORM_TYPE[]>([])
  const [autoFocus, setAutoFocus] = useState<FORM_TYPE | null>(null)
  const ERROR_MSG = "Please keep your input between 1 and 256 characters."

  const handleChangeInput = (
    type: FORM_TYPE,
    e: SelectChangeEvent | ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    const { value } = e.target

    setAutoFocus(null)
    switch (type) {
      case "objective":
        setObjective(value)
        break
      case "goal":
        setGoal(value)
        break
      case "strategy":
        setStrategy(value)
        break
      case "measure":
        setMeasure(value)
        break
    }

    setFormInvalids([])
  }

  const checkLength = (value: number) => {
    const LENGTH = { MIN: 1, MAX: 256 }
    return value >= LENGTH.MIN && value <= LENGTH.MAX
  }

  const isDuplicated = (value: string) => {
    const dulicatedValue = ogsmList.filter((ogsm) => ogsm.objective === value)
    return ogsm ? dulicatedValue.length > 1 : dulicatedValue.length >= 1
  }

  const checkValids = () => {
    const isValidObject =
      checkLength(objective.trim().length) && !isDuplicated(objective.trim())
    const isValidGoal = checkLength(goal.trim().length)
    const isValidStrategy = checkLength(strategy.trim().length)
    const isValidMeasure = checkLength(measure.trim().length)

    const invalids = []

    if (!isValidObject) {
      invalids.push("objective")
    }
    if (!isValidGoal) {
      invalids.push("goal")
    }
    if (!isValidStrategy) {
      invalids.push("strategy")
    }
    if (!isValidMeasure) {
      invalids.push("measure")
    }

    return invalids
  }

  const handleSave = () => {
    const invalids = checkValids()

    setFormInvalids(invalids as FORM_TYPE[])
    setAutoFocus(invalids[0] as FORM_TYPE)

    if (Object.keys(invalids).length > 0) {
      return
    }

    onSave({
      id: ogsm?.id || Math.random() * 10,
      objective: objective.trim(),
      goal: goal.trim(),
      strategy: strategy.trim(),
      measure: measure.trim(),
      startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : null,
      endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : null,
      isDone,
    })

    handleClose()
  }

  const handleDelete = () => {
    if (ogsm) {
      onDelete(ogsm.id)
    }

    handleClose()
  }

  const handleClose = () => {
    setIsOpen(false)
    setObjective("")
    setGoal("")
    setStrategy("")
    setMeasure("")
    setStartDate(null)
    setEndDate(null)
    setIsDone(false)
    setSelectedItem(undefined)
    setFormInvalids([])
  }

  const disabledSaveButton = useMemo(() => {
    const hasRequiredValues = objective && goal && strategy && measure
    if (!ogsm) {
      return !hasRequiredValues
    }

    const targetStartDate =
      startDate === null ? null : moment(startDate).format("YYYY-MM-DD")
    const targetEndDate =
      endDate === null ? null : moment(endDate).format("YYYY-MM-DD")

    return (
      !hasRequiredValues ||
      (ogsm.objective === objective &&
        ogsm.goal === goal &&
        ogsm.strategy === strategy &&
        ogsm.measure === measure &&
        ogsm?.startDate === targetStartDate &&
        ogsm?.endDate === targetEndDate &&
        ogsm.isDone === isDone)
    )
  }, [ogsm, objective, goal, strategy, measure, startDate, endDate, isDone])

  useEffect(() => {
    if (ogsm) {
      const { objective, goal, strategy, measure } = ogsm
      setObjective(objective)
      setGoal(goal)
      setStrategy(strategy)
      setMeasure(measure)
      setStartDate(ogsm?.startDate ? moment(ogsm.startDate) : null)
      setEndDate(ogsm?.endDate ? moment(ogsm.endDate) : null)
      setIsDone(ogsm?.isDone ? ogsm.isDone : false)
    }
  }, [ogsm])

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Paper elevation={3} className="ogsm-modal">
        <h2 className="ogsm-modal-title">Your OGSM</h2>
        <div className="ogsm-modal-content">
          <ul className="ogsm-modal-form-list">
            <li className="ogsm-modal-form">
              <TextFieldForm
                id="add-object"
                label="Objective"
                required={true}
                invalid={formInvalids.includes("objective")}
                errorText="Please ensure your input is unique and keep it between 1 and 256 characters."
                autoFocus={Boolean(autoFocus === "objective")}
                value={objective}
                placeholder="Enter the object"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput("objective", e)
                }
              />
            </li>
            <li className="ogsm-modal-form">
              <TextFieldForm
                id="add-goal"
                label="Goal"
                required={true}
                invalid={formInvalids.includes("goal")}
                errorText={ERROR_MSG}
                autoFocus={Boolean(autoFocus === "goal")}
                value={goal}
                placeholder="Enter the goal"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput("goal", e)
                }
              />
            </li>
            <li className="ogsm-modal-form">
              <TextFieldForm
                id="add-strategy"
                label="Strategy"
                required={true}
                invalid={formInvalids.includes("strategy")}
                errorText={ERROR_MSG}
                autoFocus={Boolean(autoFocus === "strategy")}
                value={strategy}
                placeholder="Enter the strategy"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput("strategy", e)
                }
              />
            </li>
            <li className="ogsm-modal-form">
              <TextFieldForm
                id="add-measure"
                label="Measure"
                required={true}
                invalid={formInvalids.includes("measure")}
                errorText={ERROR_MSG}
                autoFocus={Boolean(autoFocus === "measure")}
                value={measure}
                placeholder="Enter the measure"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput("measure", e)
                }
              />
            </li>
            <li className="ogsm-modal-form">
              <DatePickerForm
                label="Start Date"
                value={startDate}
                onChange={(newDate) => setStartDate(newDate || null)}
              />
            </li>
            <li className="ogsm-modal-form">
              <DatePickerForm
                label="End Date"
                value={endDate}
                onChange={(newDate) => setEndDate(newDate || null)}
              />
            </li>
            {ogsm && (
              <li className="ogsm-modal-form">
                <SwitchForm
                  label="Done"
                  checked={isDone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setIsDone(e.target.checked)
                  }
                />
              </li>
            )}
          </ul>
          <footer className="ogsm-modal-footer">
            {ogsm && (
              <Button variant="outlined" color="error" onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={handleSave}
              disabled={disabledSaveButton}
            >
              Save
            </Button>
          </footer>
        </div>
      </Paper>
    </Modal>
  )
}

export default OgsmModal
