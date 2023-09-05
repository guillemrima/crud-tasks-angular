import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss']
})
export class FormTasksComponent {

  tareaForm: FormGroup;
  formDisabled = false;


  constructor(private formBuilder: FormBuilder) {
    this.tareaForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      fecha: ['']
    })
  }

  getValues(event: Event) {
    event.preventDefault();
    const values = this.tareaForm.value;
  }

  enableFormSubmit() {
    console.log("hola")
  }

}
