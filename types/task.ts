export type TaskUrgency = 'urgent' | 'not_urgent'
export type TaskImportance = 'important' | 'not_important'

export interface Task {
  _id: string
  title: string
  description?: string
  startDate: string // YYYY-MM-DD
  deadlineDate?: string // YYYY-MM-DD
  endDate?: string // YYYY-MM-DD
  urgency: TaskUrgency
  importance: TaskImportance
  tags: string[] // includes custom tags; also may include "urgent"/"important" but UI treats separately
  createdAt: number
  updatedAt: number
}

