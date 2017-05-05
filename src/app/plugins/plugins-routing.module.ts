import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
	path: '',
	data: {
		title: 'Plugins'
	},
	children: [
	{
		path: 'datatable',
		loadChildren: './datatable/datatable.module#DatatableInitModule'
	},
	{
		path: 'notifications',
		loadChildren: './notifications/notifications.module#NotificationsModule'
	}
	]
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PluginsRoutingModule {}
