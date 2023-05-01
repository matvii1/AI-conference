type Icon = "mug-hot"

export interface ISchedule {
  id: number
  startTime: string
  finishTime: string
  title: string
  shortDesc: string
  fullDesc: string
  icon?: Icon
  img?: string
}
