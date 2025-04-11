import { Component, OnInit } from '@angular/core';
import { SocialMediaButtonsService } from '../../services/social-media-buttons.service';

interface SocialMediaButton {
  textButton: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-social-media-buttons',
  standalone: true,
  imports: [],
  templateUrl: './social-media-buttons.component.html',
  styleUrl: './social-media-buttons.component.scss'
})


export class SocialMediaButtonsComponent implements OnInit{

  socialMediaButtons: SocialMediaButton[] = [];
  errorMessage: string = '';

  constructor(private socialMediaButtonsService: SocialMediaButtonsService) { }

  ngOnInit(): void {
    this.loadSocialMediaButtons();
  }

  loadSocialMediaButtons(): void {
    this.socialMediaButtonsService.getSocialMediaButtons().subscribe({
      next: (buttons) => {
        this.socialMediaButtons = buttons;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar os botões de redes sociais.';
        console.error('Erro ao carregar botões:', error);
      }
    });
  }
}
