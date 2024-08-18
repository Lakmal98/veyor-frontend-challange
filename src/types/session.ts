export type Session = {
  id: number;
  name: string;
  duration: string;
  price: string;
};

export interface SessionData {
  session: Session;
  date: Date;
  time: string;
}