import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-main-threshold',
  templateUrl: './main-threshold.component.html',
  styleUrls: ['./main-threshold.component.scss']
})
export class MainThresholdComponent implements OnInit {
  formThreshold = new FormGroup ({
    id: new FormControl(uuidv4()),
    name: new FormControl (''),
  })

  @Output() mainThresholdData: EventEmitter <any> = new EventEmitter;
  @Output() closeMainThreshold: EventEmitter <any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  collectData(){
    console.log(this.formThreshold.value);
    this.mainThresholdData.emit(this.formThreshold.value);
    this.closeMainThreshold.emit(false);
  }

  closeMainModel(){
    this.closeMainThreshold.emit(false);
  }

}
