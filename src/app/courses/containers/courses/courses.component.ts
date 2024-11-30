import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];
}
