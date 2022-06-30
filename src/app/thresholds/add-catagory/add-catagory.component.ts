import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.scss']
})
export class AddCatagoryComponent implements OnInit {
  colorArray: any = [
    { color: "#FB760D", class: "orange", active: true },
    { color: "#B71E3E", class: 'red', active: false },
    { color: "#f7a532", class: 'yellow', active: false },
    { color: "#21CC97", class: 'green', active: false },
    { color: "#109aa4", class: 'turkuaz', active: false },
    { color: "#6599FF", class: 'blue', active: false },
    { color: "#464646", class: 'dark-gray', active: false },
    { color: "#8b8b8b", class: 'light-gray', active: false },
  ]

  @Output() modelClose: EventEmitter <any> = new EventEmitter;
  @Output() sendFormData: EventEmitter <any> = new EventEmitter; 

  formData = new FormGroup({
    id: new FormControl(uuidv4()),
    name: new FormControl(''),
    color: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    this.defaultcolorSelect()
  }

  defaultcolorSelect(){
    let item = this.colorArray[0].class

    this.formData.patchValue({
      color: item
     })
  }

  colorobject(item: any) {
  
    const getIndex = this.colorArray.indexOf(item); 
    this.colorArray = this.colorArray.map((item: any) => {
      return { ...item, active: false };
    })

    this.colorArray[getIndex].active = true;
    
    this.formData.patchValue({
      color: item.color
     })
  }

  closeModel() {
    this.modelClose.emit(false)
  }

  collectData() {
    console.log("formdata in child=>", this.formData.value)

    this.modelClose.emit(false)
    this.sendFormData.emit(this.formData.value)
  }
}
