import { NgModule } from '@angular/core';

import { FormsComponent } from './forms.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
	imports: [
	ComponentsRoutingModule,
	ModalModule.forRoot(),
	TabsModule
	],
	declarations: [
	FormsComponent,
	ModalsComponent,
	TablesComponent
	]
})

export class ComponentsModule { }
