import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTutorialComponent } from './store-tutorial.component';

describe('StoreTutorialComponent', () => {
  let component: StoreTutorialComponent;
  let fixture: ComponentFixture<StoreTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
