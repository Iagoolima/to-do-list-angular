import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private nameSource = new BehaviorSubject<string>('');
  nameAtual = this.nameSource.asObservable();

  saveName(name: string) {
    this.nameSource.next(name);
  }
}
