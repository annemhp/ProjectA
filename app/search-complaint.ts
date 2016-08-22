import {Component, Input, Output,EventEmitter} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router} from 'angular2/router';

import {IssuesService} from './issues.service';
import {StatusCode} from './status-code';

@Component({
    selector: 'search-by-id',
    template: `
    	<div [ngStyle] = "{'float':'right'}"class="row">
    <div class="col-md-6 well">
                <div>
                   Search by ComplaintNo
                </div>
        <form [ngFormModel]="form" (ngSubmit)="search()">
            <fieldset>
                <div class="form-group">
                   
                     <input ngControl="complaintId" type="text" class="form-control">
                </div>
            </fieldset>
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </div>
</div>
    `,
     providers: [IssuesService]
})
export class SearchComplaintComponent { 

	form: ControlGroup;

	statusCode = new StatusCode();
	statuses = this.statusCode.statuses;
    		@Output()	complaintId	=	new	EventEmitter();

	constructor(fb: FormBuilder, private _service: IssuesService, private _router: Router) {
		this.form = fb.group({
			complaintId: 0
		});
	}

	search() {
		var update = this.form.value; 
	    this.complaintId.emit(update['complaintId']);
	}
}