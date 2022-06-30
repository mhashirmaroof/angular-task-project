import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thresholds',
  templateUrl: './thresholds.component.html',
  styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsComponent implements OnInit {
  showCatagoryModel = false;
  overlayshow = false;
  catagoryArray: any = [];
  showMainThresholdModel = false;
  showSubThreshold = false;
  idOfcatagory:any;
  idformain:any
  idforSub:any
  indexformain:any;
  indexforsub:any

  constructor() { }

  ngOnInit(): void {
  }

  showModelCatagory() {
    this.showCatagoryModel = !this.showCatagoryModel;
    this.overlayshow = !this.overlayshow;
  }

  modelClose(bol: any) {

    if (bol == false) {
      this.showCatagoryModel = !this.showCatagoryModel;
      this.overlayshow = !this.overlayshow;
    }
  }

  sendFormData(data: any) {
    data.Main = [];
    this.catagoryArray.push(data);
  }

  deleteData(index: any) {
    this.catagoryArray.splice(index, 1);
  }

  mainThresholdModel(id:any) {
    this.idOfcatagory = id;
    this.showMainThresholdModel = !this.showMainThresholdModel;
    this.overlayshow = !this.overlayshow;
  }

  mainThresholdData(data: any) {
    let dataofid = this.catagoryArray.find((idData: any) => idData.id == this.idOfcatagory);
    data.Sub = [];
    this.catagoryArray[this.catagoryArray.indexOf(dataofid)].Main.push(data);
  }

  closeMainThreshold(bol: any) {
    if (bol == false) {
      this.showMainThresholdModel = !this.showMainThresholdModel;
      this.overlayshow = !this.overlayshow;
    }
  }

  deleteMain(index2:any, index1:any) {
    this.catagoryArray[index1].Main.splice(index2, 1);
  }

  subThresholdModel(id:any, id2:any, index1:any) {
    this.idformain = id;
    this.idforSub = id2;
    this.indexformain = index1;
    this.showSubThreshold = !this.showSubThreshold;
    this.overlayshow = !this.overlayshow;
  }

  subThresholdData(data:any){
    let dataofid = this.catagoryArray.find((idData: any) => idData.id == this.idformain);
    let dataofid2 = this.catagoryArray[this.indexformain].Main.find((idData: any) => idData.id == this.idforSub);

    let maain = this.catagoryArray[this.catagoryArray.indexOf(dataofid)].Main;
    maain[maain.indexOf(dataofid2)].Sub.push(data);

  }

  closesubThreshold(bol:any){
    if (bol == false) {
      this.showSubThreshold = !this.showSubThreshold;
      this.overlayshow = !this.overlayshow;
    }
  }

  deletesub(index1:any, index2:any, index3:any){
    this.catagoryArray[index1].Main[index2].Sub.splice(index3, 1);
  }

}
