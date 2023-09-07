import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})

export class ListTasksComponent {

  listaTareas = new MatTableDataSource<Tarea>([
    { id: 1, nombre: "Ir al gimnasio", descripcion: "Rutina de hombro y antebrazo", fecha: new Date("2023-09-06T12:00:00") },
    { id: 2, nombre: "Ir al dentista", descripcion: "Rutina de hombro y antebrazo", fecha: new Date("2023-09-06T12:00:00") },
    { id: 3, nombre: "Ir al Mercadona", descripcion: "Rutina de hombro y antebrazo", fecha: new Date("2023-09-06T12:00:00") },
    { id: 3, nombre: "Ir a ver a la abuela", descripcion: "Rutina de hombro y antebrazo", fecha: new Date("2023-09-06T12:00:00") }
  ]);

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fecha', 'finalizada', 'acciones'];
  emptyTasks: string = "No hay tareas pendientes";

  taskSelected: any = this.listaTareas.data[0];

}
