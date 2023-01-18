import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestbookComponent } from './oldestbook.component';

describe('OldestbookComponent', () => {
  let component: OldestbookComponent;
  let fixture: ComponentFixture<OldestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
