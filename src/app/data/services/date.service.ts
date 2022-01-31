import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getNewDate(date: string) {
    return new Date(date.replace(/-/g,"/"));
  }

  toLocaleFormat(date: string, options?: object) {
      let formattedDate = this.getNewDate(date)
          .toLocaleString("en-US", options)
          .replace(",","");
      return formattedDate;
  }

  custom(date: string, formatDate: Array<string>, formatTime: Array<string>){
    let formattedDate = new Date(date.replace(/-/g,"/"));
    let result: string;

    for (let key of formatDate) {
    }
  }

  fromVETtoLocale(dateVET) {
    let target = dateVET.replace(" VET",'')
    target = target.split(" ")
    return new Date(target[0]+' '+target[1]);
  }

  safariDate(dateStr) {
    let dateArr = dateStr.split(/[- : \/]/);
    return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3], dateArr[4], dateArr[5]);
  }
  
  dateFromTimestamp(inTimestamp: any) {
    return formatDate(inTimestamp, 'dd/MM/yyyy hh:mm:ss aa', 'en').toLowerCase();
  }



}
