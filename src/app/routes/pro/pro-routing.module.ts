import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepFormComponent } from './form/step-form/step-form.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProResultFailComponent } from './result/fail/fail.component';

const routes: Routes = [
  {
    path: 'deploy',
    component: StepFormComponent,
    // path: 'navigate',
    // children: [
    //   // { path: 'basic-form', component: BasicFormComponent },
    //   { path: 'step-form', component: StepFormComponent },
    //   // { path: 'advanced-form', component: AdvancedFormComponent },
    // ],
  },
  // {
  //   path: 'list',
  //   children: [
  //     { path: 'table-list', component: ProTableListComponent },
  //     { path: 'basic-list', component: ProBasicListComponent },
  //     { path: 'card-list', component: ProCardListComponent },
  //     {
  //       path: '',
  //       component: ProListLayoutComponent,
  //       children: [
  //         { path: 'articles', component: ProListArticlesComponent },
  //         { path: 'projects', component: ProListProjectsComponent },
  //         { path: 'applications', component: ProListApplicationsComponent },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'profile',
  //   children: [
  //     { path: 'basic', component: ProProfileBaseComponent },
  //     { path: 'advanced', component: ProProfileAdvancedComponent },
  //   ],
  // },
  // {
  //   path: 'result',
  //   children: [
  //     { path: 'success', component: ProResultSuccessComponent },
  //     { path: 'fail', component: ProResultFailComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProRoutingModule {}
