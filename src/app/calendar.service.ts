import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  private _calendarEventsUrl = "http://localhost:3000/events";
  constructor(private http : HttpClient) { }

  add(data: any){
    return this.http.post<any>(this._calendarEventsUrl,data);
   }

  get(){
    return this.http.get<any>(this._calendarEventsUrl);
  }

  delete(data : any){
    return this.http.delete<any>(this._calendarEventsUrl+"/"+data.id,data);
  }

  save(data : any){
    return this.http.put<any>(this._calendarEventsUrl+"/"+data.id,data);
  }
}
