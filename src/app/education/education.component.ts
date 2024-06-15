// education.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }), // Start from the left
        animate('500ms ease-out', style({ transform: 'translateX(0)' })) // Slide to the center
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {

  educationItems = [
    { degree: 'Bachelor of Science (B.Sc), Information Technology', institution: 'Guru Nanak College of Arts, Science, and Commerce', duration: '2021-2024' },
    { degree: 'Senior Secondary (XII), Science', institution: 'Andhra Education Society, Mumbai', duration: '2021', Percentage: "72%" },
    { degree: 'Secondary (X)', institution: 'Raja Shivaji Vidyalaya, Mumbai', duration: '2010', Percentage: "52%" },
    // Add more education items as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getEducationItemClass(index: number): string {
    return `education-item item${index + 1}`;
  }
}
