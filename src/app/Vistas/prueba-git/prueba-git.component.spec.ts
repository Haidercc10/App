import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGitComponent } from './prueba-git.component';

describe('PruebaGitComponent', () => {
  let component: PruebaGitComponent;
  let fixture: ComponentFixture<PruebaGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaGitComponent]
    });
    fixture = TestBed.createComponent(PruebaGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
