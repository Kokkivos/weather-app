import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceItemListComponent } from './province-item-list.component';

describe('ProvinceItemListComponent', () => {
  let component: ProvinceItemListComponent;
  let fixture: ComponentFixture<ProvinceItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
