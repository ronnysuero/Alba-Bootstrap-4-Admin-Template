import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

import { ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';

@Component({
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

	model: any = {};
	loading = false;
	returnUrl: string;

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
		private authenticationService: AuthenticationService,
		private toasterServices: ToasterService,
		private route: ActivatedRoute		
		) {
		this.toasterService = toasterServices;
	}

	ngOnInit() {
		// reset login status
		this.authenticationService.logout();

		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.model.username, this.model.password)
		.subscribe(
			data => {
				this.router.navigate([this.returnUrl]);
			},
			error => {
				this.toasterService.pop('error', 'Error Login', 'Username or password is incorrect');
				this.loading = false;
			});
	}
}
