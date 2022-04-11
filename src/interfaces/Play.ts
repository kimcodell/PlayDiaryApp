// TODO API 완성 후 Play 인터페이스 완성
export default interface Play {
  playId: number;
  poster: string;
  title: string;
  genre: string;
  auditorium: string;
  auditoriumSize?: number; //0: 알수없음, 1: 대극장, 2: 중/소극장
  startDate: string;
  endDate: string;
}
