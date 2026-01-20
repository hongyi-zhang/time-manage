export interface ReflectionItem {
  taskId: string
  minutes: number
  note?: string
}

export interface DailyReflection {
  _id: string
  date: string // YYYY-MM-DD
  items: ReflectionItem[]
  createdAt: number
}

