import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { startOfDay, endOfDay, isSameMonth, parseJSON } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import { CalendarService } from "../calendar.service";

import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./demo.component.css'],
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  //@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean;

  constructor(private modal: NgbModal, private router : Router, private _calender : CalendarService) {
   
  }

  ngOnInit():void{
    //this.activeDayIsOpen = false;
   this.getEvents();
    
  }
  
  getEvents(){
    this._calender.get()
    .subscribe(
      (response) => {
        console.log(response);
        response.result = response.result.map((event) => {
          return {
            id : event._id,
            title : event.title,
            start : parseJSON(event.start),
            end : parseJSON(event.end),
            color : event.color
          };
        })
        this.events = [
          ...response.result
        ];
       this.refresh.next();
      },
      (error) => {
       console.log(error);
       if(error instanceof HttpErrorResponse){
         if (error.status == 401 || error.status == 403){
            localStorage.removeItem('auth-token');
            this.router.navigate(['/login']);
         }
       }
      }
     )
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.setView(CalendarView.Day);
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }
  

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  newDefaultEvent : CalendarEvent = {
    title: 'New event',
    start: startOfDay(new Date()),
    end: endOfDay(new Date()),
    color: colors.red
  }

  addEvent(): void {
    this._calender.add(this.newDefaultEvent)
    .subscribe(
      (response) => {
       console.log(response);
       this.getEvents();
       //location.reload();
      },
      (error) => {
       console.log(error);
       alert(error.error.mesg);
      }
     )
    
    // this.events = [
    //   ...this.events,
    //   this.newDefaultEvent,

    // ];
  }

  saveEvent(eventToSave : CalendarEvent){
    this._calender.save(eventToSave)
    .subscribe(
      (response) => {
       console.log(response);
       ///location.reload();
       this.getEvents();
      },
      (error) => {
       console.log(error);
       alert(error.error.mesg);
      }
     )
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    //this.events = this.events.filter((event) => event !== eventToDelete);
    console.log(eventToDelete);
    this._calender.delete(eventToDelete)
     .subscribe(
      (response) => {
       console.log(response);
       //location.reload();
       this.getEvents();
      },
      (error) => {
       console.log(error);
       alert(error.error.mesg);
      }
     )
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  logout(){
    localStorage.removeItem('auth-token');
    this.router.navigate(['/login']);
  }
}
