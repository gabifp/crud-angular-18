import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})

export class CoursesService {
  private http: HttpClient = inject(HttpClient);
  private readonly API = 'assets/courses.json';

  listCourse() {
    return this.http.get<Course[]>(this.API);
  }
}
