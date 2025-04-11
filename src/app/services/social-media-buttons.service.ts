import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SocialMediaButton {
  textButton: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocialMediaButtonsService {
  private jsonUrl = '/assets/mock/social-media-buttons.json';

  constructor(private http: HttpClient) { }

  getSocialMediaButtons(): Observable<SocialMediaButton[]> {
    return this.http.get<SocialMediaButton[]>(this.jsonUrl);
  }
}