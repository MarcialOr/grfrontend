import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingPage } from './setting.page';
import { HomeSettingComponent } from './views/home-setting/home-setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingPage,
    children: [
      {
        path: '',
        component: HomeSettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingPage,
  HomeSettingComponent]
})
export class SettingPageModule {}
