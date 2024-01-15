import React from "react"
import { Divider, ListItem, ListItemText } from "@mui/material"
import { OGSM_TYPE, NUMBER_SUFFIX } from "@/types"
import moment from "moment"
import SwitchInListForm from "@/components/blocks/form/SwitchInListForm"

interface OgsmItemProps {
  ogsm: OGSM_TYPE
  onOpenModal: (id?: number) => void
  onSave: (ogsm: OGSM_TYPE) => void
}

const OgsmItem = ({ ogsm, onOpenModal, onSave }: OgsmItemProps) => {
  const calculateDaysDiff = (start: string, end: string) => {
    return moment(end).diff(start, "days")
  }

  const getSuffix = (day: number) => {
    if (day <= 0) return NUMBER_SUFFIX.NULL
    if (day === 1) return NUMBER_SUFFIX.FIRST
    if (day === 2) return NUMBER_SUFFIX.SECOND
    if (day === 3) return NUMBER_SUFFIX.THIRD
    return NUMBER_SUFFIX.OTHER
  }

  const getRDay = (start: string) => {
    const runningDay =
      calculateDaysDiff(start, moment().format("YYYY-MM-DD")) + 1
    let suffix, rDay
    if (runningDay > 0) {
      suffix = getSuffix(runningDay)
      rDay = `${runningDay}${suffix} day`
    } else {
      rDay = "Not started yet"
    }

    return rDay
  }

  const getDDay = (end: string) => {
    const deadline = calculateDaysDiff(moment().format("YYYY-MM-DD"), end)
    const label = deadline >= 0 ? `D-` : `D+`

    return `${label}${Math.abs(deadline)}`
  }

  const getDateMessage = () => {
    if (ogsm?.isDone) {
      return "Goal Achieved! 🚀"
    }

    if (!ogsm?.startDate && !ogsm?.endDate) {
      return "Working towards my goal... 🌟"
    }

    if (ogsm?.startDate && ogsm?.endDate) {
      const rDay = getRDay(ogsm.startDate)
      const dDay = getDDay(ogsm.endDate)

      return `${dDay} (${rDay})`
    }

    if (ogsm?.startDate && !ogsm?.endDate) {
      const rDay = getRDay(ogsm.startDate)
      return rDay
    }

    if (!ogsm?.startDate && ogsm?.endDate) {
      const dDay = getDDay(ogsm.endDate)
      return `${dDay}`
    }

    return ""
  }

  return (
    <>
      <ListItem
        className='ogsm-item'
        role='button'
        secondaryAction={<SwitchInListForm ogsm={ogsm} onSave={onSave} />}
      >
        <ListItemText
          primary={ogsm.goal}
          secondary={getDateMessage()}
          onClick={() => onOpenModal(ogsm.id)}
        />
      </ListItem>
      <Divider component='li' />
    </>
  )
}

export default OgsmItem
