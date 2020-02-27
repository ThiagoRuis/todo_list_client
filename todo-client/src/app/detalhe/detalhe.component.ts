import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task';
import { TaskAPIService } from '../task-api.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskAPI: TaskAPIService,
    private location: Location
  ) {}

  ngOnInit() {
    this.task = {
      id: null,
      title: '',
      description: '',
      deadline: null,
      completed_at: null,
    };

    this.getTask();
  }

  getTask(): void {
    const taskId = +this.route.snapshot.paramMap.get('id');
    if(taskId) {
      this.taskAPI.getTaskDetail(taskId)
        .subscribe(task => this.task = task);
    }
  }

  goBack(): void {
    this.location.back();
  }

  saveTask(): void {
    if (this.task.id === null) {
      delete this.task.id;
      this.taskAPI.addTask(this.task)
        .subscribe(() => this.goBack());
    } else {
      this.taskAPI.updateTask(this.task)
        .subscribe(() => this.goBack());
    }
  }

}
