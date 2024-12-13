import { Component } from '@angular/core';
import { TextInputComponent } from '../uiComponents/text-input/text-input.component';
import { CardComponent } from '../uiComponents/card/card.component';
import { StarRatingComponent } from '../uiComponents/star-rating/star-rating.component';
import { PlacesAutocompleteComponent } from "../uiComponents/places-autocomplete/places-autocomplete.component";

@Component({
  selector: 'brunch-add-review',
  imports: [TextInputComponent, CardComponent, StarRatingComponent, PlacesAutocompleteComponent],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {

  valueFromBrunchTextInput:string = '';

  handleRating(rating:number) {
    console.log('add review received: ' + rating);
  }

  handlePlaceSelected(place: object) {//called when google places component emits location

    console.log('handlePlaceSelected fires!');
    console.log(place);
  }

}
