import {Component, OnInit} from 'angular2/core';
import { HomePanelComponent } from './home-panel.component';
import {IssuesService} from './issues.service';

@Component({
    template: `<body  [ngStyle] ="{'background-image': 'url(../assets/images/FinalHome.png)' 
                    , 'background-size':'cover', 'min-width': '1265px'} ">
                    <home-panel  [panelTitle]=panelTitle1  [panelText]=panelText1 [ngStyle] =
                    "{'position': 'absolute','bottom':'65%' ,'left':'10%'}"> </home-panel>
                    <home-panel  [panelTitle]=panelTitle2  [panelText]=panelText2 [ngStyle] =
                    "{'position': 'absolute','bottom':'45%' ,'left':'10%'}"> </home-panel>
                    <home-panel  [panelTitle]=panelTitle3  [panelText]=panelText3 [ngStyle] =
                    "{'position': 'absolute','bottom':'25%' ,'left':'10%'}"> </home-panel>
                     
                    </body>`,
    directives:[HomePanelComponent],
     providers: [IssuesService]
})
export class HomeComponent  {
    panelTitle1 ='Received Complaints';
    panelText1 = 0;

    panelTitle2 ='Resolved Complaints';
    panelText2 = 0;

    panelTitle3 ='Pending Complaints';
    panelText3 = 0;

    reportObj:any;

    constructor(private _service: IssuesService) {
       
    }

    ngOnInit() {

        this._service.getReport()
            .subscribe(report => {
                this.reportObj = report, 
                this.panelText1 = this.reportObj['all'].open + this.reportObj['all'].inprogress
                +this.reportObj['all'].invalid+this.reportObj['all'].resolved;
                this.panelText2 = this.reportObj['all'].resolved;
                this.panelText3 = this.panelText1 -  this.panelText2;
                

            });

    }
}