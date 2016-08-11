import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router} from 'angular2/router';

import {IssuesService} from './issues.service';
import {StatusCode} from './status-code';

@Component({
    selector: 'update-form',
    templateUrl: 'app/update-form.component.html',
    providers: [IssuesService]
})
export class UpdateFormComponent {
   	form: ControlGroup;
	@Input('issueId') issueId;
	statusCode = new StatusCode();
	statuses = this.statusCode.statuses;

	constructor(fb: FormBuilder, private _service: IssuesService, private _router: Router) {
		this.form = fb.group({
			message: [],
			status: []
		});
	}

	save() {
		var update = this.form.value;
		var today = new Date();
		update['date'] = today;
		this._service.UpdateIssue(update, this.issueId)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
            });

		this._service.UpdateStatus(update, this.issueId)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
            });
		this._router.navigate(['Issues']);
	}

}