import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// servicelist pages
import { ServicelistComponent } from './servicelist/servicelist.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import {
  UserServiceSelectComponent
} from './passport/service-select/service-select.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import {ServiceDetailComponent} from "./service-detail/service-detail.component";
import {LayoutModule} from "../layout/layout.module";


const COMPONENTS = [
  ServicelistComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserServiceSelectComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
  Exception403Component,
  Exception404Component,
  Exception500Component,
  ServiceDetailComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ SharedModule, RouteRoutingModule,LayoutModule ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
