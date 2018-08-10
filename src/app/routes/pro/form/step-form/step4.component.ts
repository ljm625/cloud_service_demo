import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { TransferService } from './transfer.service';
import {fadeIn, fadeOut, zoomOutRight} from "ng-animate";
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {ApiService} from "@core/api_service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  animations: [
    trigger('hide', [transition('no => yes', [useAnimation(zoomOutRight)])]),
    trigger('fade', [
      transition('hide => show',useAnimation(fadeIn)),
      transition('show => hide', useAnimation(fadeOut))
    ]),
    trigger('fadehide', [
      transition('hide => show',useAnimation(fadeIn)),
      transition('show => hide', useAnimation(fadeOut))
    ]),


  ],

})
export class Step4Component implements OnInit{

  @Input() datas=[];
  @Input() name="";

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
  wave_status="hide";
  display_status="show";
  submit_status="hide";
  wave_display=false;
  prev() {
    --this.item.step;
  }

  submit(){
    this.loading = true;
    this.wave_status = "show";
    this.display_status = "hide";
    this.wave_display=true;
    for(let i = 0; i<this.hideList.length;i++){
      setTimeout(() => {
        this.hideList[i] = "yes";
      }, 100*i);
    }

    // setTimeout(() => {
    // }, 3000);
    this.service_detail.sites=this.datas;
    this.service_detail.service_name=this.name;

    this.api.create_service(this.service_detail).subscribe(resp => {
      console.log("------------------------------------");
      console.log(resp);
      this.submitted = true;
      this.service_id = resp['id'];
      this.wave_status = "hide";
      console.log("------------------------------------");
      this.submit_status="show";

    })
  }

  ngOnInit(){
    for(let i =0;i<this.datas.length+4;i++){
      this.hideList.push("no");
      this.hideElementList.push(false);
    }
  }

  animateDone(data,i){
    // console.log(data);
    if(data.triggerName ==="hide" && data.fromState ==="no"){
      this.hideElementList[i] = true;
    }

    if(data.triggerName ==="fade" && data.fromState ==="show"){
      this.wave_display=false;
    }

  }

}
