import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getCountry } from '../redux/slices/countrySlice'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const SearchCountry = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = ref.current?.value
    dispatch(getCountry(searchQuery))
    navigate('/detail')
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        type="text"
        name="searchQuery"
        id="searchQuery"
        required
        // @ts-ignore
        ref={ref}
        className="fixed z-10 w-[20rem] mt-3 inset-x-0 mx-auto p-2 bg-bg-color border border-black"
        placeholder="Country Name"
      />
      {/*<button type="submit">go</button>*/}
    </form>
  )
}

export default SearchCountry
