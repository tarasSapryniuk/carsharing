import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldInput } from '../field-interface'; 

@Component({
  selector: 'spa-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field: FieldInput;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  imageURL: string;
  uploadForm: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  constructor(public fb: FormBuilder) { 
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

  ngOnInit() {
    console.log(this.form.value.image);
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
