import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlaceComponent } from './find-place.component';

describe('FindPlaceComponent', () => {
  let component: FindPlaceComponent;
  let fixture: ComponentFixture<FindPlaceComponent>;

  beforeEach(async () => {
    (window as any).google = {
      maps: {
        places: {
          Autocomplete: function (element:HTMLElement, options:Array<string>) {
            return {
              addListener(event:string, listener:Function) {
                console.log('listener added')
              },
              getPlace() {
                return 'test value';
              }
            };
          }
        }
      }
    };
    await TestBed.configureTestingModule({
      imports: [FindPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
