import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskAPIService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskDetail(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}${taskId}/`);
  }

  completeTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}${taskId}/done/`);
  }

  deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}${taskId}/`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}${task.id}/`, task, this.httpOptions);
  }
}
