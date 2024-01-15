export type OGSM_TYPE = {
  id: number
  objective: string
  goal: string
  strategy: string
  measure: string
  startDate?: string | null
  endDate?: string | null
  isDone?: boolean
}

export enum NUMBER_SUFFIX {
  NULL = "",
  FIRST = "st",
  SECOND = "nd",
  THIRD = "rd",
  OTHER = "th",
}
