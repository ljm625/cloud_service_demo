import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TransferService } from './transfer.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit{
  constructor(public item: TransferService,private fb: FormBuilder) {}

  sites = 1;
  editCache = {};
  dataSet = [];
  totalNAS;
  @Output() dataEmit = new EventEmitter();
  loading = false;
  actived = [true];
  data = [];

  validateForms: Array<any> =[];


  ngOnInit():void {
    this.validateForms.push(this.fb.group({
      name            : [ null, [ Validators.required ] ],
      cityName         : [ null, [ Validators.required ] ],
      address    : [ null, [ Validators.required ] ],
      bandwidth         : [ null, [ Validators.required, Validators.min(1),Validators.max(10000), Validators.pattern("[0-9]+") ] ],
      slaName      : [ null, [ Validators.required ] ],
    }));

  }

  addSite():void {
    this.sites=this.sites+1;
    this.validateForms.push(this.fb.group({
      name            : [ null, [ Validators.required ] ],
      cityName         : [ null, [ Validators.required ] ],
      address    : [ null, [ Validators.required ] ],
      bandwidth         : [ null, [ Validators.required, Validators.min(1),Validators.max(10000), Validators.pattern("[0-9]+") ] ],
      slaName      : [ null, [ Validators.required ] ],
    }));
    for(let i = 0;i<this.actived.length;i++){
      if(this.actived[i] == true) {
        this.actived[i]=false;
      }
    }
    this.actived.push(true);
  }


  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    // Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }


  deleteSite(num) :void{
    this.validateForms =(num > -1) ? [
      ...this.validateForms.slice(0, num),
      ...this.validateForms.slice(num + 1)]: this.validateForms;
    this.actived = [
      ...this.actived.slice(0, num),
      ...this.actived.slice(num + 1)];
    if(this.actived.length>0){
      // Just display the previous one as activated
      if(num>0){
        this.actived[num-1]=true;
      }
      else{
        this.actived[0]=true;
      }
    }
  }

  // confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  //   // if (!control.value) {
  //   //   return { required: true };
  //   // } else if (control.value !== this.validateForm.controls.password.value) {
  //   //   return { confirm: true, error: true };
  //   // }
  // };


  isValid(): boolean{
    for(let form of this.validateForms){
      if(form.status ==='INVALID'){
        return false;
      }
    }

    return true;
  }

  validateAndSubmit(): void{
    // Validate the data then submit
    if(this.isValid()){
      this.data =[];
      for(let form of this.validateForms){
        this.data.push(form.value);
      }
    }
    this.dataEmit.emit(this.data);
    console.log(this.data);
    ++this.item.step;
  }

  prev() {
    --this.item.step;
  }


}
