export interface INotification {
  id: number
  message: string
}

export class Notification implements INotification{
  id: number
  message: string

  constructor()
  constructor(data: INotification)
  constructor(data?: any) {
    this.id = data && data.id || undefined
    this.message = data && data.message || undefined
  }
}
