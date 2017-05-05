import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

import { AuthenticationService } from '../login/services/authentication.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './full-layout.component.html'
})

export class FullLayoutComponent implements OnInit {

	constructor(private router: Router,
		private authenticationService: AuthenticationService,
		private route: ActivatedRoute) { }

	public disabled:boolean = false;
	public status:{isopen:boolean} = {isopen: false};
	public returnUrl: string;

	public toggled(open:boolean):void {
		console.log('Dropdown is now: ', open);
	}

	public toggleDropdown($event:MouseEvent):void {
		$event.preventDefault();
		$event.stopPropagation();
		this.status.isopen = !this.status.isopen;
	}

	ngOnInit(): void {}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(["/"]);
	}
}
