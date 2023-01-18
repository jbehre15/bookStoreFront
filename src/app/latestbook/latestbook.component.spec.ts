import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestbookComponent } from './latestbook.component';

describe('LatestbookComponent', () => {
  let component: LatestbookComponent;
  let fixture: ComponentFixture<LatestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
