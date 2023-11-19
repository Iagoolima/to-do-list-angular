import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-box-tasks',
  templateUrl: './box-tasks.component.html',
  styleUrls: ['./box-tasks.component.css'],
})
export class BoxTasksComponent {
  tasks: { name: string }[] = [];

  constructor(private nameTask: AppService) {}

  ngOnInit() {
    this.nameTask.nameAtual.subscribe((name) => {
      if (name.trim() !== '') {
        this.tasks.push({ name });
      }
    });
  }

  deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
