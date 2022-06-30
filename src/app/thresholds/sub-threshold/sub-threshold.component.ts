import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-sub-threshold',
  templateUrl: './sub-threshold.component.html',
  styleUrls: ['./sub-threshold.component.scss']
})
export class SubThresholdComponent implements OnInit {
  subThreshold = new FormGroup ({
    id: new FormControl(uuidv4()),
    name: new FormControl(''),
  })
  
  @Output() subThresholdData: EventEmitter <any> = new EventEmitter;
  @Output() closesubThreshold: EventEmitter <any> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  collectData(){
    console.log("sub threshold in itself", this.subThreshold.value);
    this.subThresholdData.emit(this.subThreshold.value);
    this.closesubThreshold.emit(false);
  }

  closesubModel(){
    this.closesubThreshold.emit(false);
  }
}
