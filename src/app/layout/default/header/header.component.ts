import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles:[`
    :host ::ng-deep .layout-header {
      background: #fff;
      color: black;
      
    }
    :host ::ng-deep .anticon{
      color: rgba(0,0,0,.65);

    }

    i.trigger:hover {
      background: #e6f7ff;
    }

  `]
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService) { }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
