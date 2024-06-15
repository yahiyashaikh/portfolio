import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  startDownload(event: Event) {
    const button = event.currentTarget as HTMLElement;
    button.classList.add('loading');
    setTimeout(() => {
      button.classList.remove('loading');
    }, 3000); // Adjust the time as per your download duration
  }
}


