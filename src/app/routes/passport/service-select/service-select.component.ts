import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip } from 'ng-animate';
import {Router} from "@angular/router";


@Component({
  selector: 'passport-service-select',
  templateUrl: './service-select.component.html',
  animations: [
    trigger('flip', [transition('mouseOut => mouseIn', useAnimation(flip))]),
    trigger('flip2', [transition('mouseOut => mouseIn', useAnimation(flip))])

  ],

})
export class UserServiceSelectComponent {
  mouse = 'mouseOut';
  mouse2 = 'mouseOut';

  inProgress =false;
  inProgress2 =false;


  constructor(public msg: NzMessageService, private router: Router) {}

  mouseEnter(i){
    if(i===1){
      if(this.inProgress===true) return;
      this.inProgress = true;
      console.log("Enter!");
      this.mouse = 'mouseIn';
      setTimeout(()=>{ this.inProgress =false }, 200);

    }
    else {
      if(this.inProgress2===true) return;
      this.inProgress2 = true;
      console.log("Enter!");
      this.mouse2 = 'mouseIn';
      setTimeout(()=>{ this.inProgress2 =false }, 200);

    }


  }
  mouseLeave(i){
    if(i===1){
      if(this.inProgress===true) return;
      this.inProgress = true;

      console.log("Leave!");
      this.mouse = 'mouseOut';
      setTimeout(()=>{ this.inProgress =false }, 200);


    }
    else{
      if(this.inProgress2===true) return;
      this.inProgress2 = true;

      console.log("Leave!");
      this.mouse2 = 'mouseOut';
      setTimeout(()=>{ this.inProgress2 =false }, 200);

    }
  }

}
