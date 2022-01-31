import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AppConfig } from '@app/data/services/app-config.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DateService } from "@app/data/services/date.service";

export interface dataList {
  id: number;
  name: string;
  date: string;
  email: string;
  status: string;
}

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list-component.html',
  styleUrls: ['./certificate-list-component.scss']
})

export class CertificateListComponent implements AfterViewInit{
  /*PAGE VARIABLES */
  page: any;

  /*TABLE VARIABLES */
  resultsLength = 0;
  displayedColumns: string[] = ['id', 'status-phone', 'name', 'date', 'email', 'status'];
  dataSource: MatTableDataSource<dataList>;
  
  /*SORT AND PAGINATOR VARIABLES */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private appConfig: AppConfig,
    private _liveAnnouncer: LiveAnnouncer,
    private dateService: DateService,
    ) {

    this.page = this.appConfig.list;
    this.dataSource = new MatTableDataSource(this.page.certificates.data);
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  customDate(date){
    return this.dateService.dateFromTimestamp(date);
  }
}
  



