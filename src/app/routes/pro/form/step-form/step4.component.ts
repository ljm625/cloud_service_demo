import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { TransferService } from './transfer.service';
import {zoomOutRight} from "ng-animate";
import {animate, transition, trigger, useAnimation} from "@angular/animations";
import {ApiService} from "@core/api_service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  animations: [
    trigger('hide', [transition('no => yes', [useAnimation(zoomOutRight)])])
  ],

})
export class Step4Component implements OnInit{

  @Input() datas=[];
  str ="wdawdasdasdsadsadsadsadsadasdasdasdas";
  constructor(public item: TransferService, private api:ApiService) {}
  loading = false;
  service_id = null;
  service_detail = {
    "user":"admin",
    "service_name":"test_service",
    "sites":[
    ],
    "type":"cloudbone",
    "cloud":"aliyun",
    "ip":"127.0.0.1"
  };

  hideList=[];
  submitted = false;
  hideElementList = [];
  prev() {
    --this.item.step;
  }

  submit(){
    this.loading = true;

    for(let i = 0; i<this.hideList.length;i++){
      setTimeout(() => {
        this.hideList[i] = "yes";
      }, 100*i);
    }

    // setTimeout(() => {
    // }, 3000);
    this.service_detail.sites=this.datas;

    this.api.create_service(this.service_detail).subscribe(resp =>{
      console.log("------------------------------------");
      console.log(resp);
      this.submitted = true;
      this.service_id = resp['id'];

      console.log("------------------------------------");

    })
  }

  ngOnInit(){
    for(let i =0;i<this.datas.length+3;i++){
      this.hideList.push("no");
      this.hideElementList.push(false);
    }
  }

  animateDone(data,i){
    // console.log(data);
    if(data.triggerName ==="hide" && data.fromState ==="no"){
      this.hideElementList[i] = true;
    }
  }

}
