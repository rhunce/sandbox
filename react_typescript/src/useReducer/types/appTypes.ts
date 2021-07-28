export type TState = {
  count: number
} | any

export type TAction = {
  type: string,
  payload?: any
}

// Lazy initialization

export type TInitialCount = {
  initialCount: number
}

export type TInitialState = {
  count: TInitialCount
}

export type TCounterProps = {
  initialCount: number
}