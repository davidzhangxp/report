import { Component, OnInit } from '@angular/core';
import { tickets_list,report_titles } from '../tickets';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {


   tickets = tickets_list
  report_heads= report_titles
   excelData: any[] | undefined;
   fileName = 'Breakfix_report.xlsx'
 
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
 
   exportexcel(){
     /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
     /* save to file */  
     XLSX.writeFile(wb, this.fileName);
   }


}
