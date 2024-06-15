import { Component, OnInit ,  Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactCardComponent } from './contact-card/contact-card.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent , AboutComponent , EducationComponent,ProjectsComponent,ContactCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#301934');
  }
}
