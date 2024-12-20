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