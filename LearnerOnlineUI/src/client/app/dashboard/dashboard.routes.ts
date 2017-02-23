import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

import { AssessmentsRoutes } from './assessments/index';
import { AdministrationRoutes } from './administration/index';
import { EducatorsRoutes } from './educators/index';
import { GroupsRoutes } from './groups/index';
import { LearnersRoutes } from './learners/index';
import { ToolboxRoutes } from './toolbox/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			...HomeRoutes,
			...ChartRoutes,
			...BSComponentRoutes,
			...TableRoutes,
			...BlankPageRoutes,
			...AssessmentsRoutes,
			...FormRoutes,
			...GridRoutes,
			...BSElementRoutes,
			...AdministrationRoutes,
			...EducatorsRoutes,
			...GroupsRoutes,
			...LearnersRoutes,
			...ToolboxRoutes
		]
	}
];
