import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router} from 'angular2/router';

import {IssuesService} from './issues.service';
import {DepartmentCode} from './department-code';

@Component({
    templateUrl: 'app/issue-form.component.html',
	providers: [IssuesService]
})
export class IssueFormComponent implements OnInit {
	form: ControlGroup;

	departmentCode = new DepartmentCode();
	departments = [];


	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _issueService: IssuesService
    ) {
		this.form = fb.group({
			name: [],
			mobile: [],
			place: [],
			department: [],
			subject: [],
			problem: []
		});

	}


	ngOnInit() {
		this.departments = this.departmentCode.departments;
	}

	save() {
		var issue = this.form.value;
		var today = new Date();
		issue['date'] = today;
		issue['status'] = "open";
		this._issueService.addIssue(issue)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
				this._router.navigate(['Issues']);
            });
	}
}