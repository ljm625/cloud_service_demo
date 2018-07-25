import {Component, Input} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'pro-result-success',
  templateUrl: './success.component.html',
})
export class ProResultSuccessComponent {
  @Input() project_id="";

  constructor(public msg: NzMessageService) {}
}
