import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {IssuesService} from './issues.service';
import {DepartmentCode} from './department-code';
import {SearchDepartmentComponent} from './search-department';
import {StatusCode} from './status-code'

@Component({
    templateUrl: 'app/issues.component.html',
    providers: [IssuesService],
	directives: [RouterLink,SearchDepartmentComponent]
})
export class IssuesComponent implements OnInit {
	issues: any[];
	issuesObj: any;
	departmentCode = new DepartmentCode();
	departmentsMap :any;

	statusCode = new StatusCode();
	statuses = this.statusCode.statusMap;
	
    constructor(private _service: IssuesService) {
		this.issues = [];
	}

	ngOnInit() {
		this.departmentsMap = this.departmentCode.departmentsMap;

		this._service.getIssues()
			.subscribe(issues => {
				this.issuesObj = issues,
					this.issues = Object.keys(issues).map(key => key);
			});
	}


	onStatusChange($event){
		if($event=="all"){
			this.ngOnInit();
		}else{
			this._service.getIssuesByStatus($event)
			.subscribe(issues => {
				this.issuesObj = issues,
					this.issues = Object.keys(issues).map(key => key);
			});
		}
	}
}