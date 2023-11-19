import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-input-top',
  templateUrl: './input-top.component.html',
  styleUrls: ['./input-top.component.css'],
})
export class InputTopComponent {
  constructor(private nameTask: AppService) {}

  name: string = '';

  saveName(): void {
    if(this.name!== ''){
      this.nameTask.saveName(this.name);
      this.name = '';
    }
    
  }
}
