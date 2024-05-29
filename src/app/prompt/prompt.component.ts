import { Component } from '@angular/core';
import { faPenToSquare, faPuzzlePiece, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  faPenToSquare = faPenToSquare;
  faPuzzlePiece = faPuzzlePiece;
  faWandMagicSparkles = faWandMagicSparkles;
  showCards = true;
  newIdea = '';
  ideas: string[] = [];

  sendIdea() {
    if (this.newIdea.trim() !== '') {
      this.ideas.push(this.newIdea);
      this.newIdea = '';
      this.showCards = false; // Hide the cards
    }
  }
}
