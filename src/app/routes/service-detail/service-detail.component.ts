import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ApiService} from "@core/api_service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'service-detail',
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {

  service = <any>{};


  constructor(private api:ApiService, private route: ActivatedRoute, private modalService: NzModalService, private router: Router)
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



  getStatus(status):string{

    if(status === "submitted"){
      return "default";
    }
    else if (status ==="processing"){
      return "processing";

    }
    else if (status === "complete"){
      return "success";

    }
    else if (status ==="failed"){
      return "error";

    }

  }

  getStatusText(status):string{
    if(status === "submitted"){
      return "已提交";
    }
    else if (status ==="processing"){
      return "部署中";

    }
    else if (status === "complete"){
      return "部署成功";

    }
    else if (status ==="failed"){
      return "部署失败";

    }

  }



  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle     : '您确定要删除这个服务么?',
      nzContent   : '<b style="color: red;">服务名称： '+this.service.service_name+'</b>',
      nzOkText    : '确定',
      nzOkType    : 'danger',
      nzOnOk      : () => this.deleteService(),
      nzCancelText: '取消',
      nzOnCancel  : () => console.log('Cancel')
    });
  }

  deleteService(): void {
    this.api.delete_service(this.route.snapshot.params.id).subscribe(resp => {
      console.log("Service Deleted!");
      this.router.navigate(['/services']);
    })
  }






}
