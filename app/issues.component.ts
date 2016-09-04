import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {IssuesService} from './issues.service';
import {DepartmentCode} from './department-code';
import {SearchComplaintComponent} from './search-complaint';

import {SearchDepartmentComponent} from './search-department';


import {StatusCode} from './status-code'

@Component({
    templateUrl: 'app/issues.component.html',
    providers: [IssuesService],
	directives: [RouterLink,SearchDepartmentComponent,SearchComplaintComponent]
})
export class IssuesComponent implements OnInit {
	issues: any[];
	issuesObj: any;
	departmentCode = new DepartmentCode();
	departmentsMap :any;
	commentsLoading ;

	statusCode = new StatusCode();
	statuses = this.statusCode.statusMap;
	
    constructor(private _service: IssuesService) {
		this.issues = [];
	}

	ngOnInit() {
		this.departmentsMap = this.departmentCode.departmentsMap;
		this.commentsLoading = true;
		this._service.getIssues()
			.subscribe(issues => {
				this.issuesObj = issues,
					this.issues = Object.keys(issues).map(key => key),
					this.commentsLoading = false;
			});
	}


	onStatusChange($event){
		if($event=="all"){
			this.ngOnInit();
		}else{
			this.commentsLoading = true;
			this._service.getIssuesByStatus($event)
			.subscribe(issues => {
				this.issuesObj = issues,
				this.issues = Object.keys(issues).map(key => key),
				this.commentsLoading = false;
			});
		}
	}

	onIdSearch($event){
		console.log($event);
		this._service.getIssuesByComplaintId($event)
			.subscribe(issues => {
				this.issuesObj = issues,
					this.issues = Object.keys(issues).map(key => key);
			});
		
	}
}