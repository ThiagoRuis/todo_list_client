import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskAPIService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskDetail(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}${taskId}/`);
  }
}
