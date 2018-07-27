import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ApiService} from "@core/api_service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  services = [];


  constructor(private api:ApiService, private router: Router)
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




}
