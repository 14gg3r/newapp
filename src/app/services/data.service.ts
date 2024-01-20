import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Драйв',
      subject: '52р',
      date: '',
      id: 0,
      read: false
    },
    {
      fromName: 'Бёрн',
      subject: '152Р',
      date: '',
      id: 1,
      read: false
    },
    {
      fromName: 'Редбул',
      subject: '252Р',
      date: '',
      id: 2,
      read: false
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
