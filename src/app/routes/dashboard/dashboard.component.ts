import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ApiService} from "@core/api_service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  services = [];


  constructor(private api:ApiService)
  {

  }

  indexs = [];
  index1 = 0;
  index2 = 0;


  ngOnInit() {

    this.api.get_services().subscribe(resp => {
      this.services = resp;
      console.log(resp);
      for(let service of this.services){
        this.indexs.push(0);
      }
    })

  }




}
