import { Component } from '@angular/core';
import { fruits } from './fruits-list';
import { numbers } from './jizhonglei';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})

export class ListComponent {
  fruits = fruits;
  numbers=numbers;
  
  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
}
