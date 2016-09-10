import {Component, OnInit} from 'angular2/core';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {IssuesService} from './issues.service';
import {UpdateFormComponent} from './update-form.component'
import {UpdateListComponent} from './update-list.component';
import {StatusCode} from './status-code';
import * as firebase from 'firebase';

@Component({
    templateUrl: 'app/issue-details.component.html',
	providers: [IssuesService],
    directives: [UpdateFormComponent, UpdateListComponent]
})
export class IssueDetailsComponent implements OnInit {
	issue: any;
	issueId: any;
	updates: any;
	isEdit = false;
	statusCode = new StatusCode();
	statuses = this.statusCode.statusMap;
	image:string;

	constructor(private _routeParams: RouteParams,
		private _service: IssuesService) {
			
	}

	ngOnInit() {
		this.statuses = this.statusCode.statusMap;
		this.issueId = this._routeParams.get("id");
		this._service.getIssue(this.issueId)
			.subscribe(issue =>{
				this.issue = issue,
				this.showImage(issue.imageUri);

			} );
			
			

		this._service.getUpdate(this.issueId)
			.subscribe(updates => {
				this.updates = (updates) ? Object.keys(updates).map(key => updates[key]) : null
			}
			);
	}

	toggle() {
		this.isEdit = !this.isEdit;
	}

	showImage(imageUrl){
			console.log(imageUrl);
			//const storageRef = firebase.storage().ref().child(imageUrl);
			//console.log(storageRef);
			
			
			//storageRef.getDownloadURL().then(url=> this.image=url);
	}
}