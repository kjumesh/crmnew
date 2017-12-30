import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from '../../../services/calendar/calendar-service';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {
  closeResult: string;
  modalReference: any;
  firstday;
  lastday;
  startdate;
  starttime;
  enddate;
  endtime;
  rowdate;
  rowmonth;
  calenderdata;
  startarr = [];
  endarr = [];
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  months = ["January","February","March","April","May","June","July","August","September","October", "November", "December"];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  datesarr = [];
  hrs = [12,1,2,3,4,5,6,7,8,9,10,11];
  dayhrs = [];
  events=[];
  constructor(calendar: NgbCalendar, private modalService: NgbModal, private calendarService: CalendarService) {
    calendarService.getCalenderdata().subscribe(calenderdata => {
       this.calenderdata = calenderdata.data;
       for (let d of calenderdata.data) {
          this.startarr.push(d.date+d.start_time);
          this.endarr.push(d.date+d.end_time);
        }
        });
    this.events["2017-12-26"] = [];
    this.events["2017-12-26"]["12:30am"] = "fdfd";
    this.events["2017-12-27"] = [];
    this.events["2017-12-27"]["9am"] = "fdfd";
    console.log(this.events);
    this.getweekdays(new Date());
    for (var i = 0; i < this.hrs.length; i++) {
      this.dayhrs.push({text:this.hrs[i]+"am",is_row:true});
      this.dayhrs.push({text:this.hrs[i]+":30am",is_row:false});
    }
    for (var i = 0; i < this.hrs.length; i++) {
      this.dayhrs.push({text:this.hrs[i]+"pm",is_row:true});
      this.dayhrs.push({text:this.hrs[i]+":30pm",is_row:false});
    }
  }

  getweekdays(datef){
    let first = datef.getDate() -datef.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6
    this.datesarr = [];
    this.firstday = new Date(datef.setDate(first));
    this.lastday = new Date(datef.setDate(last));
    this.fromDate = {year: this.firstday.getFullYear(), month: this.firstday.getMonth() + 1, day: this.firstday.getDate()};
    this.toDate = {year: this.lastday.getFullYear(), month: this.lastday.getMonth() + 1, day: this.lastday.getDate()};
    let today = new Date();
    let todaydate = today.getDate();
    let todaymonth = today.getMonth();
    let todayyear = today.getFullYear();
    let nowmonth = this.firstday.getMonth();
    let nowyear = this.firstday.getFullYear();
    for(let i=0;i<7;i++){
      if(todaymonth == nowmonth && todayyear == nowyear && todaydate == (this.firstday.getDate()+i)){
        this.datesarr.push({name:this.days[this.firstday.getDay()], no:this.firstday.getDate(),setdate:{year: this.firstday.getFullYear(), month: this.firstday.getMonth() + 1, day: this.firstday.getDate()}, today:true});
      }else
        this.datesarr.push({name:this.days[this.firstday.getDay()], no:this.firstday.getDate(),setdate:{year: this.firstday.getFullYear(), month: this.firstday.getMonth() + 1, day: this.firstday.getDate()}});
      this.firstday.setDate(this.firstday.getDate() + 1);
    }
    console.log(this.datesarr)
    console.log(this.dayhrs)
  }
  onDateChange(date: NgbDateStruct) {
    this.getweekdays(new Date(date.year,date.month-1,date.day));
    
  }
  shopopup(obj){
    console.log(obj)
  }
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  ngOnInit() {
  }
  open(content,desc,dateval, hindex,dindex) {
    this.startdate = dateval;
    this.starttime = desc;
    this.enddate = this.datesarr[dindex].setdate;
    this.endtime = this.dayhrs[hindex].text;
    this.modalReference = this.modalService.open(content,{ size: 'lg'});
  }
  close(content) {
    this.modalReference.close();
  }
  getrowspan(text,obj){
    if (this.startarr.indexOf(obj.year+'-'+obj.month+'-'+obj.day+text) != -1){
      this.rowdate = obj.day;
      this.rowmonth = obj.month;
      return 2;
    }
    else
      return 0;
  }
  getdescription(text,obj){
    let i = this.startarr.indexOf(obj.year+'-'+obj.month+'-'+obj.day+text);
    if (i != -1){
      console.log(this.calenderdata[i]);
      return this.calenderdata[i].description;
    }
    else
    //   return null;
  return '';
  }
  changeBackground(obj): any {
    if(this.rowdate == obj.day && this.rowmonth == obj.month){
      this.rowdate = null;
      this.rowmonth = null;
      return { 'display': 'none' };
    }else{
      return null;
    }
    
}
}
