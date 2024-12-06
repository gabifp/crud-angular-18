import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesService } from '../../services/courses.service';

import { Course } from '../../model/course';
import { first, Observable } from 'rxjs';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    standalone: true,
    imports: [
      MatTableModule,
      MatCardModule,
      MatToolbarModule,
    ],
})
export class CoursesComponent {
  displayedColumns = ['name', 'category'];

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.listCourses();
  }

  listCourses(): Observable<Course[]> {
    return this.coursesService.listCourse()
      .pipe(
        first(),
      )
  }
}
