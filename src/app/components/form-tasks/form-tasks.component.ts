import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss']
})
export class FormTasksComponent {

  tareaForm: FormGroup;
  formDisabled = false;
  nombre: string = "";
  descripcion: string = "";
  fecha: string = "";

  listaTareas: Tarea[] = [];

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.tareaForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      fecha: ['']
    })
  }

  setTarea(event: Event) {
    event.preventDefault();
    const tarea = this.tareaForm.value;
    this.listaTareas.push(tarea);

    this.nombre = "";
    this.descripcion = "";
    this.fecha = "";

    this._snackBar.open("¡Tarea registrada correctamente!", "Deshacer", {
      duration: 2000
    });

  }

}
