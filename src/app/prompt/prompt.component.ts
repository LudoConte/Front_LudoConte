import { HttpClient } from '@angular/common/http';
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
  isGenerating = false; // Variable pour suivre le statut de la requête

  constructor(private http: HttpClient) {}

  sendIdea() {
    if (this.newIdea.trim() !== '') {
      const idea = this.newIdea.trim();
      this.newIdea = '';
      this.showCards = false; // Hide the cards
      this.ideas.push(idea);

      // Désactiver le bouton d'envoi pendant que la requête est en cours
      this.isGenerating = true;

      // Envoyer la requête POST au backend
      this.http.post<{ generated_text: string }>('http://localhost:5000/generate', { query: idea }).subscribe(response => {
        console.log(response);
        
        const generatedText = response.generated_text.replace(/\n/g, '<br>'); // Remplacer les retours à la ligne par <br>

        // Ajouter la réponse générée à la conversation
        this.ideas.push(generatedText);

        // Réactiver le bouton d'envoi
        this.isGenerating = false;

      }, error => {
        console.error('Erreur lors de la génération du texte:', error);
        this.isGenerating = false; // Réactiver le bouton d'envoi en cas d'erreur
      });
    }}
  }

