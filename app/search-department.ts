import {Component, Input, Output,EventEmitter} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router} from 'angular2/router';

import {IssuesService} from './issues.service';
import {StatusCode} from './status-code';

@Component({
    selector: 'search-department',
    templateUrl:'app/search-department.html',
    providers: [IssuesService]
})

export class SearchDepartmentComponent {

	form: ControlGroup;

	statusCode = new StatusCode();
	statuses = this.statusCode.statuses;
    		@Output()	status	=	new	EventEmitter();

	constructor(fb: FormBuilder, private _service: IssuesService, private _router: Router) {
		this.form = fb.group({
			status: []
		});
	}

	search() {
		var update = this.form.value;
	    this.status.emit(update['status']);
	}

}