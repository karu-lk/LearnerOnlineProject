import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { ChartModule } from './charts/chart.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { GridModule } from './grid/grid.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { BSElementModule } from './bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';

import { AssessmentsModule } from './assessments/assessments.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { AdministrationModule } from './administration/administration.module';
import { EducatorsModule } from './educators/educators.module';
import { GroupsModule } from './groups/groups.module';
import { LearnersModule } from './learners/learners.module';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        ChartModule,
        TableModule,
        FormModule,
        GridModule,
    	BSComponentModule,
        BSElementModule,
        BlankPageModule,
        AssessmentsModule,
        ToolboxModule,
        AdministrationModule,
        EducatorsModule,
        GroupsModule,
        LearnersModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
