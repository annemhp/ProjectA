import {Component, OnInit} from 'angular2/core';
import {IssuesService} from './issues.service';
import {DepartmentCode} from './department-code';

@Component({
    selector: 'reports',
    template: `<table class="table table-bordered">
	<thead>
		<tr>
			<th>Department</th>
			<th>Open</th>
			<th>InProgress</th>
			<th>Resolved</th>
            <th>Invalid</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="#department of departments">
			<td>{{ departmentsMap[department]}}</td>
			<td>{{ reportObj[department].open }}</td>
			<td>{{ reportObj[department].inprogress }}</td>
			<td>{{ reportObj[department].resolved }}</td>
			<td>{{ reportObj[department].invalid }}</td>
		</tr>
	</tbody>
</table>
<div>*Reports will be update daily midnight<div>`,
    providers: [IssuesService]
})
export class ReportsComponent implements OnInit {
    reportObj: any;
    departments:any;
departmentCode = new DepartmentCode();
	departmentsMap :any;

    constructor(private _service: IssuesService) {
        this.departmentsMap = this.departmentCode.departmentsMap;
        this.departmentsMap['all'] = 'All Departments';
    }

    ngOnInit() {

        this._service.getReport()
            .subscribe(report => {
                this.reportObj =report;
                this.departments = Object.keys(report);

            });

    }

}