import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformBarComponent } from './platform-bar.component';

describe('PlatformBarComponent', () => {
  let component: PlatformBarComponent;
  let fixture: ComponentFixture<PlatformBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlatformBarComponent]
    });
    fixture = TestBed.createComponent(PlatformBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
