import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ProRoutingModule } from './pro-routing.module';

import { StepFormComponent } from './form/step-form/step-form.component';
import { Step1Component } from './form/step-form/step1.component';
import { Step2Component } from './form/step-form/step2.component';
import { Step3Component } from './form/step-form/step3.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProResultFailComponent } from './result/fail/fail.component';
import {Step4Component} from "./form/step-form/step4.component";

const COMPONENTS_NOROUNT = [Step1Component, Step2Component, Step3Component, Step4Component];

@NgModule({
  imports: [SharedModule, ProRoutingModule],
  declarations: [
    StepFormComponent,
    ProProfileBaseComponent,
    ProProfileAdvancedComponent,
    ProResultSuccessComponent,
    ProResultFailComponent,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ProModule {}
