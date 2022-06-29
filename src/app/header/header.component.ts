import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonToggle = true;
  dashboardIconLitransactionDelay ='0.1s'; 
  dashboardIconLitransform= 'translateY(0px) scale(0)';
  bussinesIconLitransitionDelay = "0.2s";
  bussinesIconLitransform = "translateY(0px) scale(0)";
  tasksIconLitransitionDelay = "0.3s";
  tasksIconLitransform = "translateY(0px) scale(0)";
  userIconLitransitionDelay = "0.4s";
  userIconLitransform = "translateY(0px) scale(0)";

  constructor() { }

  ngOnInit(): void {
  }

  circleMenuToggle( ) {
    if (this.buttonToggle == true) {
      this.dashboardIconLitransactionDelay = '0.4s'
      this.bussinesIconLitransitionDelay = "0.3s";
      this.tasksIconLitransitionDelay = "0.2s";
      this.userIconLitransitionDelay = "0.1s";
      this.dashboardIconLitransform='translateY(45px) scale(1)'
      this.bussinesIconLitransform = "translateY(90px) scale(1)";
      this.tasksIconLitransform = "translateY(135px) scale(1)";
      this.userIconLitransform = "translateY(180px) scale(1)";
  
      this.buttonToggle = false;
    } else {
      this.dashboardIconLitransactionDelay = '0.1s'
      this.dashboardIconLitransform='translateY(0px) scale(0)'
      this.bussinesIconLitransitionDelay = "0.2s";
      this.tasksIconLitransitionDelay = "0.3s";
      this.userIconLitransitionDelay = "0.4s";
      this.bussinesIconLitransform = "translateY(0px) scale(0)";
      this.tasksIconLitransform = "translateY(0px) scale(0)";
      this.userIconLitransform = "translateY(0px) scale(0)";
  
      this.buttonToggle = true;
    }
  }

}
