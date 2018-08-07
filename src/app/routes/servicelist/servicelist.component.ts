import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {ApiService} from "@core/api_service";
import {Router} from "@angular/router";

@Component({
  selector: 'service-list',
  templateUrl: './servicelist.component.html',
})
export class ServicelistComponent implements OnInit {

  services = [];


  constructor(private api:ApiService, private router: Router)
  {

  }

  indexs = [];
  index1 = 0;
  index2 = 0;


  ngOnInit() {
    this.updateServiceList();
    setInterval(()=>{
      this.updateServiceList();
    },5000);
    // this.api.get_services().subscribe(resp => {
    //   this.services = resp;
    //   console.log(resp);
    //   for(let service of this.services){
    //     this.indexs.push(0);
    //   }
    // })

  }

  updateServiceList(){
    this.api.get_services().subscribe(resp => {
      // Do not hard modify on this list.
      if(this.services.length != resp.length){
        console.log("length mismatch");
        if(this.services.length<resp.length){
          // This is a add action.
          console.log("new element added");

          let id_list=[];
          for(let i =0;i<this.services.length;i++){
            id_list.push(this.services[i].id);
          }
          for(let i=0;i<resp.length;i++){
            if(!id_list.includes(resp[i].id)){
              console.log("add : "+resp[i].id);

              this.services.push(resp[i]);
            }
          }
        }
        if(this.services.length> resp.length){
          console.log("old element deleted");

          let id_list=[];
          for(let i =0;i<resp.length;i++){
            id_list.push(resp[i].id);
          }
          console.log(id_list);

          for(let i =this.services.length-1;i>=0;i--){
            if(!id_list.includes(this.services[i].id)){
              console.log("delete : "+this.services[i].id);
              this.services.splice(i,1);
            }
          }
        }
      }
      if (this.indexs.length != this.services.length){
        this.indexs=[];
        for(let service of this.services){
          this.indexs.push(0);
        }
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
