import {Component, Input} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import {Router} from "@angular/router";

@Component({
  selector: 'pro-result-success',
  templateUrl: './success.component.html',
})
export class ProResultSuccessComponent {
  @Input() project_id="";

  constructor(public msg: NzMessageService, private router: Router) {}
}
