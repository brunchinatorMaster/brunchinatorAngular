export type NavigationMenuItem = {
  icon: string, 
  label: string, 
  route: string
}

export type User = {
  userName: string,
  email: string,
  token: string
}

export type userResponse = {
  success:boolean,
  user: {
    userName: string,
    email: string,
    token: string
  }
}

export type sendResetPasswordEmailResponse = {
  success:boolean,
  response: any,
}

export type addReviewResponse = {
  success:boolean,
  user: {
    userName: string,
    email: string,
    token: string
  }
}

export type getPlacesResponse = {
  success:boolean,
  places: Array<Place>
}

export type getPlaceByPlaceIdResponse = {
  success:boolean,
  placeExists:boolean,
  place: Place
}

export type getReviewsByUserNameResponse = {
  success:boolean,
  reviews: Array<Review>
}

export type serviceError = {
  statusCode: number,
  message: string
}

export type autoCompletePlace = {
  place_id: string,
  name: string,
  vicinity: string,
  formatted_phone_number: string,
  photos: Array<googlePlacesPhotosArrayObject>
}

type googlePlacesPhotosArrayObject = {
  height: number,
  width: number,
  html_attributions: Array<string>,
  getUrl: Function
}

export type Review = {
  placeId: string,
  userName: string,
  placeName: string,
  burger: number | null,
  bloody: number | null,
  words: string,
  reviewDate: string,
}

export type CreateReview = {
  placeId: string,
  userName: string,
  placeName: string,
  vicinity: string,
  burger: number | null,
  bloody: number | null,
  words: string,
  reviewDate: string,
}

export type Place = {
  placeId: string,
  placeName: string,
  vicinity: string,
  burger: number | null,
  bloody: number | null,
  numberOfReviews: number,
  overallRating: number,
}