import { Component } from '@angular/core';
import { SocialMediaButtonsComponent } from "../../components/social-media-buttons/social-media-buttons.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SocialMediaButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
