import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './login/auth.guard';

export const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{
	path: '',
	redirectTo: 'dashboard',
	pathMatch: 'full',
	canActivate: [AuthGuard]
},
{
	path: '',
	component: FullLayoutComponent,
	canActivate: [AuthGuard],
	data: {
		title: 'Home'
	},
	children: [
	{
		path: 'dashboard',
		loadChildren: './dashboard/dashboard.module#DashboardModule'
	},
	{
		path: 'components',
		loadChildren: './components/components.module#ComponentsModule'
	},
	{
		path: 'forms',
		loadChildren: './forms/forms.module#FormsModule'
	},
	{
		path: 'plugins',
		loadChildren: './plugins/plugins.module#PluginsModule'
	}
	]
},
{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
