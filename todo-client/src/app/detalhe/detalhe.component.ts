import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private taskAPI: TaskAPIService
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const taskId = +this.route.snapshot.paramMap.get('id');
    this.taskAPI.getTaskDetail(taskId)
      .subscribe(task => this.task = task);
  }

}
