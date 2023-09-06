import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})

export class ListTasksComponent {

  listaTareas = new MatTableDataSource<Tarea>([]);
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fecha'];
  emptyTasks: string = "No hay tareas pendientes"


}
