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

  listaTareas: Tarea[] = [
  ];

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.tareaForm = this.formBuilder.group({
      id: [],
      nombre: [''],
      descripcion: [''],
      fecha: ['']
    })
  }

  setTarea(event: Event) {
    event.preventDefault();
    const tarea = this.tareaForm.value;
    const propiedades = Object.keys(tarea);

    //Asignar la id de la tarea
    tarea.id = this.listaTareas.length + 1

    // Verificar si alguna propiedad está vacía
    const propiedadesVacias = propiedades.filter(propiedad => tarea[propiedad] === '');

    if (propiedadesVacias.length > 0) {
      this._snackBar.open("Debes rellenar todos los datos del formulario", "Ok", {
        duration: 2000
      });
    } else {
      // Si todas las propiedades están llenas, registra la tarea
      this.listaTareas.push(tarea);

      this._snackBar.open("¡Tarea registrada correctamente!", "Deshacer", {
        duration: 2000
      });

      this.nombre = "";
      this.descripcion = "";
      this.fecha = "";

    }
  }


}
