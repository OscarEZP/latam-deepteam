import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TeamRoutingModule } from './team.routing';
import {CommonsModule} from '../commons/commons.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CommonsModule
  ]
})
export class TeamModule { }
