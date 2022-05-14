export interface ICharacter {
  char_id: number;
  name: string;
  birthday: string;
  occupation: [];
  img: string;
  status: 'Alive' | 'Deceased' | 'Presumed dead' | 'Unknown';
  nickname: string;
  appereance: string;
  portrayed: string;
  category: [];
}
