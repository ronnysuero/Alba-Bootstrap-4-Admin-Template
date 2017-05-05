import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginComponent } from './login/login.component';

// used to create fake backend
import { fakeBackendProvider } from './login/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './login/auth.guard';
import { AuthenticationService } from './login/services/authentication.service';
import { UserService } from './login/services/user.service';

import { ToasterModule }  from 'angular2-toaster/angular2-toaster';

import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Loading Buttons
import { LaddaModule } from 'angular2-ladda';

@NgModule({
	imports: [
	BrowserModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	BsDropdownModule.forRoot(),
	TabsModule.forRoot(),
	ChartsModule,
	FormsModule,
	HttpModule,
	ToasterModule,
	LaddaModule
	],
	declarations: [
	AppComponent,
	FullLayoutComponent,
	NAV_DROPDOWN_DIRECTIVES,
	BreadcrumbsComponent,
	SIDEBAR_TOGGLE_DIRECTIVES,
	AsideToggleDirective,
	LoginComponent,
	RegisterComponent,
	NotFoundComponent
	],
	providers: [
	{
		provide: LocationStrategy,
		useClass: HashLocationStrategy
	},
	AuthGuard,
	AuthenticationService,
	UserService,

	// providers used to create fake backend
	fakeBackendProvider,
	MockBackend,
	BaseRequestOptions
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
