import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
{
	path: '',
	data: {
		title: 'Components'
	},
	children: [
	{
		path: 'forms',
		component: FormsComponent,
		data: {
			title: 'Forms'
		}
	},
	{
		path: 'modals',
		component: ModalsComponent,
		data: {
			title: 'Modals'
		}
	},
	{
		path: 'tables',
		component: TablesComponent,
		data: {
			title: 'Tables'
		}
	}
	]
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class ComponentsRoutingModule {}
