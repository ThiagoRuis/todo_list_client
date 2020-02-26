import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-client';

  tasks = [{
    "id": 1,
    "title": "Tarefa 1",
    "description": "Super descrição do caralho nessa bagaça 2",
    "deadline": "2020-02-26",
    "completed_at": "2020-02-29"
},{
  "id": 2,
  "title": "Tarefa 2",
  "description": "Super descrição do caralho nessa bagaça 2",
  "deadline": "2020-02-26",
  "completed_at": "2020-02-29"
},{
  "id": 3,
  "title": "Tarefa 3",
  "description": "Super descrição do caralho nessa bagaça 2",
  "deadline": "2020-02-26",
  "completed_at": "2020-02-29"
},{
  "id": 4,
  "title": "Tarefa 4",
  "description": "Super descrição do caralho nessa bagaça 2",
  "deadline": "2020-02-26",
  "completed_at": "2020-02-29"
}];
}
