import {Component, OnInit, Input} from 'angular2/core';
import {StatusCode} from './status-code';

@Component({
	selector: 'update-list',
	template: `<div [ngStyle] = "{'margin-left':'6%', 'margin-top':'1%'}" class="panel panel-default">
  <div class="panel-heading">
    <h2 class="panel-title">Updates </h2>
  </div>
  <div *ngIf="updates!=null" class="panel-body">
  <table class="table table-bordered">
	<thead>
		<tr>
			<th>Date</th>
			<th>Message</th>
            <th>Status</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="#update of updates">
			<td>{{ update.date}}</td>
			<td>{{ update.message }}</td>
            <td>{{ statuses[update.status] }}</td>
		</tr>
	</tbody>
</table>
  </div>
</div>`
})
export class UpdateListComponent {
	@Input('updates') updates;
	statusCode = new StatusCode();
	statuses = this.statusCode.statusMap;

}