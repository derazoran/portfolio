import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallicaSongSearchComponent } from './metallica-song-search.component';

describe('MetallicaSongSearchComponent', () => {
  let component: MetallicaSongSearchComponent;
  let fixture: ComponentFixture<MetallicaSongSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallicaSongSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallicaSongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
