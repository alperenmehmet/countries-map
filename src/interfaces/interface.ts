export interface IState {
  loading: boolean
  error: string
  country: ICountry
}

export interface Name {
  common: string
  official: string
}

export interface Money {
  name: string
  symbol: string
}

// export interface Currencies {
//   Money: Money
// }

export interface Languages {
  aym: string
  que: string
  spa: string
}

export interface Flags {
  png: string
  svg: string
}

export interface ICountry {
  name: Name
  currencies: Money
  capital: string[]
  region: string
  languages: Languages
  borders: string[]
  area: number
  population: number
  flags: Flags
}
