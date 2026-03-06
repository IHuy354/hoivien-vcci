export type ChallengeStatus =
  | 'completed'
  | 'pending'
  | 'failed'
  | 'retry'

export interface Tablechallenge {
  id: number
  title: string
  student: {
    name: string
    avatar?: string
  }
  submittedAt: string
  score: number | null
  status: ChallengeStatus
}
