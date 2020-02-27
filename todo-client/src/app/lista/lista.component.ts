import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskAPIService } from '../task-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  constructor(private taskAPI: TaskAPIService) { }

  ngOnInit() {
    this.listaTarefas();
  }

  listaTarefas(): void {
    this.taskAPI.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  detalheTarefa(task: Task): void {
    this.selectedTask = task;
  }

  concluirTarefa(task: Task): void {
    this.taskAPI.completeTask(task.id).subscribe(() => this.listaTarefas());
  }

  removerTarefa(task: Task): void {
    this.taskAPI.deleteTask(task.id).subscribe(() => this.listaTarefas());
  }
}
