import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {IssuesService} from './issues.service';
import {DepartmentCode} from './department-code';
import {SearchComplaintComponent} from './search-complaint';

import {SearchDepartmentComponent} from './search-department';
import {PaginationComponent} from './pagination.component';


import {StatusCode} from './status-code'

@Component({
    templateUrl: 'app/issues.component.html',
    providers: [IssuesService],
	directives: [RouterLink,SearchDepartmentComponent,SearchComplaintComponent,PaginationComponent]
})
export class IssuesComponent implements OnInit {
	issues: any[];
	pagedPosts = [];
	issuesObj: any;
	departmentCode = new DepartmentCode();
	departmentsMap :any;
	commentsLoading ;
	pageSize = 10;

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
					this.pagedPosts =  _.take(this.issues, this.pageSize),
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
				this.pagedPosts =  _.take(this.issues, this.pageSize),
				this.commentsLoading = false;
			});
		}
	}

	onIdSearch($event){
		this._service.getIssuesByComplaintId($event)
			.subscribe(issues => {
				this.issuesObj = issues,
					this.issues = Object.keys(issues).map(key => key);
					this.pagedPosts =this.issues;
			});
		
	}



	onPageChanged(page) {
		var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.issues, startIndex), this.pageSize);
 	}
}