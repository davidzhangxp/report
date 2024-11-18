import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { title_list } from '../tickets';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkboxes.component.html',
  styleUrl: './checkboxes.component.css'
})
export class CheckboxesComponent {
  @Output() newItemEvent = new EventEmitter<string[]>();
  myForm: FormGroup;
  options = title_list;
  checkedoptions:any[]=[]

  constructor(private formBuilder: FormBuilder) {
    //push all options which is checked to a new array
    this.options.filter((option)=>option.checked == true).map((item)=>{this.checkedoptions.push(item.value)})
    
    this.myForm = this.formBuilder.group({
      selectedOptions: this.formBuilder.array(this.checkedoptions)
    });
  }

  onCheckboxChange(event: any, value: string) {
    const selectedOptions = this.myForm.get('selectedOptions') as FormArray;

    if (event.target.checked) {
      selectedOptions.push(new FormControl(value));
    } else {
      const index = selectedOptions.controls.findIndex(x => x.value === value);
      selectedOptions.removeAt(index);
    }
    this.newItemEvent.emit(this.myForm.value.selectedOptions)
  }
  onSubmit(){
    console.log(this.myForm.value.selectedOptions,this.myForm.get('selectedOptions'))
    this.newItemEvent.emit(this.myForm.value.selectedOptions)
  }


}
