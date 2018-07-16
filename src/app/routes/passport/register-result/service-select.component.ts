import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip } from 'ng-animate';
import {Router} from "@angular/router";


@Component({
  selector: 'passport-service-select',
  templateUrl: './service-select.component.html',
  animations: [
    trigger('flip', [transition('mouseOut => mouseIn', useAnimation(flip))])
  ],

})
export class UserServiceSelectComponent {
  mouse = 'mouseOut';
  inProgress =false;

  constructor(public msg: NzMessageService, private router: Router) {}

  mouseEnter(){
    if(this.inProgress===true) return;
    this.inProgress = true;
    console.log("Enter!");
    this.mouse = 'mouseIn';
    setTimeout(()=>{ this.inProgress =false }, 200);

  }
  mouseLeave(){
    if(this.inProgress===true) return;
    this.inProgress = true;

    console.log("Leave!");
    this.mouse = 'mouseOut';
    setTimeout(()=>{ this.inProgress =false }, 200);

  }

}
