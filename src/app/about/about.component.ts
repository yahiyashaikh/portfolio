import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateSkillCards();
  }

  animateSkillCards() {
    const skillCards = Array.from(document.querySelectorAll('.skill-card') as NodeListOf<HTMLElement>);

    skillCards.forEach((card: HTMLElement, index: number) => {
      // Add the 'animated' class with a delay for each card
      setTimeout(() => {
        card.classList.add('animated');
      }, index * 500); // Increase delay for each card
    });
  }
}