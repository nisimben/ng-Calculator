import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../myservices/services.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public srvHistory: ServicesService) { }

  ngOnInit(): void {
  }

}
