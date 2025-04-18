import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaButtonsComponent } from './social-media-buttons.component';

describe('SocialMediaButtonsComponent', () => {
  let component: SocialMediaButtonsComponent;
  let fixture: ComponentFixture<SocialMediaButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
