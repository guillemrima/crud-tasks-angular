import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  @Input() taskSelected: any;

  isTaskSelected: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.taskSelected)
  }

}
