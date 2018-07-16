import { Component } from '@angular/core';
import {SettingsService} from "@delon/theme";

@Component({
  selector: 'layout-nav',
  templateUrl: './nav.component.html',
  styles  : [
    `
      :host ::ng-deep .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
      }

      :host ::ng-deep .trigger:hover {
        color: #1890ff;
      }

      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
      }
      :host ::ng-deep .offset-menu {
        margin-left: -8px !important;
      }
    `
  ]

})
export class LayoutNavComponent {

  constructor(public settings: SettingsService){}
}
