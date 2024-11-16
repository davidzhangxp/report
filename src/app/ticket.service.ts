import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './tickets.js';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  

  excelData: any[] = [];
  data$:Observable<any> | undefined;
  apiurl = "http://localhost:8080/api/ticket/"
  apiuserurl = 'http://localhost:8080/api/user/'
  constructor(private http: HttpClient ) { }

  registerUser(user:User): Observable<any>{
    return this.http.post(this.apiuserurl + 'register', user)
  }

  addTicket(data:any){
    this.http.post(this.apiurl + 'addticket',data).subscribe(data=>{
      console.log(data)
    })
  }
  getTickets(){
    return this.http.get(this.apiurl + 'tickets')
  }
  getExcelData(){
    return this.excelData
  }
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('Excel data:', this.excelData);
    };
    reader.readAsBinaryString(file);
  }

}
