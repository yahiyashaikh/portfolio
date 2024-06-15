import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('project') projectElements!: QueryList<ElementRef>;

  projects = [
    {
      title: 'COUPON 99.COM',
      description: 'An online platform for buying and selling coupons, showcasing proficiency in web development technologies..',
      link: 'https://iam-hamidansari.github.io/Coupons99/index.html'
    },
    {
      title: 'PERSONAL PORTFOLIO',
      description: "A portfolio is a curated collection of an individual's or organization's work, showcasing skills, accomplishments, and projects to demonstrate expertise and experience in a particular field",
      link: 'https://example.com/project-two'
    },
  ];
  isVisible: boolean[] = [];

  ngOnInit() {
    this.isVisible = new Array(this.projects.length).fill(false);
    this.projects.forEach((_, i) => {
      setTimeout(() => {
        this.isVisible[i] = true;
      }, (i + 1) * 1000);
    });
  }

  ngAfterViewInit() {
    this.projectElements.changes.subscribe(() => {
      console.log(this.projectElements);
    });
  }
}
