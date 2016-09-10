import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuesService {
	private _url ="https://projectabeta-3e48d.firebaseio.com";

	private _url1 = this._url+"/issues";
	private _url_report = this._url+"/reports";

	constructor(private _http: Http) {
	}

	getIssues() {
		return this._http.
			get(this._url1 + ".json")
			.map(res => res.json()
			);
	}

	getReport() {
		return this._http.
			get(this._url_report + ".json")
			.map(res => res.json()
			);

	}

	getIssuesByStatus(status) {
		return this._http.
			get(this._url1 + `.json?orderBy="status"&equalTo="` + status + '"')
			.map(res => res.json()
			);
	}

	getIssuesByComplaintId(id) {
	
		return this._http.
			get(this._url1 + `.json?orderBy="complaintNo"&equalTo=` + id )
			.map(res => res.json()
			);
	}

	addIssue(issue) {
		return this._http.post(this._url1 + ".json", JSON.stringify(issue))
			.map(res => res.json());
	}


	getIssue(id) {
		return this._http.get(this._url1 + "/" + id + ".json")
			.map(res => res.json());
	}

	getUpdate(id) {
		return this._http.get(this._url1 + "/" + id + "/updates.json")
			.map(res => res.json());
	}

	UpdateIssue(update, issueId) {
		return this._http.post(this._url1 + "/" + issueId + "/updates.json", JSON.stringify(update))
			.map(res => res.json());
	}

	UpdateStatus(update, issueId) {
		return this._http.patch(this._url1 + "/" + issueId + "/.json", JSON.stringify({ 'status': update['status'] }))
			.map(res => res.json());
	}
}