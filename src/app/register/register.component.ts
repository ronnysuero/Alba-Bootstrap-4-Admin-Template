import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../login/services/user.service';
import { ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';

@Component({
	templateUrl: './register.component.html'
})
export class RegisterComponent {

	model: any = {};
	loading = false;

	private toasterService: ToasterService;
	
	public toasterconfig : ToasterConfig =
	new ToasterConfig({
		tapToDismiss: true,
		timeout: 5000,
		//showCloseButton: true,
		newestOnTop: true
	});

	constructor(
		private router: Router,
		private userService: UserService,
		private toasterServices: ToasterService) {
		this.toasterService = toasterServices;
	}

	register() {
		this.loading = true;
		this.userService.create(this.model)
		.subscribe(
			data => {
				// set success message and pass true paramater to persist the message after redirecting to the login page
				this.toasterService.pop('success', 'Error Login', 'Registration successful');
				this.router.navigate(['/login']);
			},
			error => {
				this.toasterService.pop('error', 'Error Login', error);
				this.loading = false;
			});
	}
}
