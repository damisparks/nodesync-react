export interface ICountryDTO {
  name: string
  _id: string
}

export interface IUserDTO {
  name: string
  _id: string
  surname: string
  country: string
  birthdate: string | Date
}
