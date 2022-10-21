import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BASE_URL } from '../../constants/api'
import { IState, ICountry } from '../../interfaces/interface'

const initialState: IState = {
  loading: false,
  error: '',
  country: <ICountry>{},
  searchQuery: ''
}

export const getCountry = createAsyncThunk(
  'country/getCountry',
  async (countryName: any) => {
    return fetch(`${BASE_URL}${countryName}`).then((res) => {
      return res.json()
    })
  }
)

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder.addCase(getCountry.pending, (state: IState) => {
      state.loading = true
    })

    builder.addCase(
      getCountry.fulfilled,
      (state: IState, action: PayloadAction<any>) => {
        state.loading = false
        state.country = action.payload[0]
      }
    )

    builder.addCase(getCountry.rejected, (state: IState) => {
      state.loading = false
      state.error = 'An Error Occured'
    })
  }
})

export default countrySlice.reducer
