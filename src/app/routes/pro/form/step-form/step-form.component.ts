import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less'],
  providers: [TransferService],
})
export class StepFormComponent implements AfterViewInit {
  constructor(public item: TransferService) {}
  site_datas=[];

  ngAfterViewInit() {
    console.log('item', this.item);
    // this.item.step=3;
  }


  getSiteData(data){
    console.log(data);
    this.site_datas=data;
  }
}
