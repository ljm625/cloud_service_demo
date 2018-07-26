import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ApiService} from "@core/api_service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'service-detail',
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {

  service = {};


  constructor(private api:ApiService, private route: ActivatedRoute)
  {

  }

  indexs = [];
  index1 = 0;
  index2 = 0;


  ngOnInit() {

    console.log(this.route.snapshot);

    this.api.get_service(this.route.snapshot.params.id).subscribe(resp => {
      this.service = resp;
      console.log(resp);
      // for(let service of this.serservicesvices){
      //   this.indexs.push(0);
      // }
    })

  }




}
