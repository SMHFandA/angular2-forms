import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'simple-form',
  templateUrl: 'simple-form.component.html'
})
export class SimpleForm implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required]
      lastname: ['', Validators.required]
    });
  }

  ngOnInit() {
    // console.log(this.form.controls.firstname);
  }

  handleSubmit() {
    this.form.reset();
  }

}
