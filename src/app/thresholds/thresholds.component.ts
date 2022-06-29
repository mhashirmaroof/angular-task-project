import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thresholds',
  templateUrl: './thresholds.component.html',
  styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsComponent implements OnInit {
  showCatagoryModel= false;
  overlayshow = false;
  dataReceived:any =[];

  constructor() { }

  ngOnInit(): void {
  }

  showModelCatagory(){
    this.showCatagoryModel = !this.showCatagoryModel;
    this.overlayshow = !this.overlayshow;
  }

  modelClose(bol:any){
   
    if(bol==false){
      this.showCatagoryModel = !this.showCatagoryModel;
    this.overlayshow = !this.overlayshow;
    }
  }

  sendFormData(data:any) {
    this.dataReceived.push(data);
    console.log("I am in Parent", this.dataReceived);
  }

  deleteData(index:any) {
    this.dataReceived.splice(index, 1);
  }

}
