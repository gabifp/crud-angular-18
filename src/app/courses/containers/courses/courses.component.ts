import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Course } from '../../model/course';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    standalone: true,
    imports: [
        MatTableModule,
        MatCardModule,
        MatToolbarModule
    ],
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];
}
