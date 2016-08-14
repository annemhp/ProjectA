import {Component, OnInit, Input} from 'angular2/core';


import { LoginComponent } from './login.component';

@Component({    
    selector:'home-panel',
    template: `<div  [ngStyle]="{'width': '200px', 'margin-left':'10%'}"  
    class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">{{panelTitle}}</h3>
  </div>
  <div class="panel-body">
   {{panelText}}
  </div>
</div>`,
    directives:[LoginComponent]
})
export class HomePanelComponent  {
    @Input('panelTitle') panelTitle;
    @Input('panelText') panelText;
}