import { useAppSelector } from '../redux/hooks'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import millify from 'millify'

const Detail = () => {
  const { country, loading } = useAppSelector((state) => state.country)

  const navigate = useNavigate()

  const {
    name,
    currencies,
    capital,
    region,
    languages,
    borders,
    area,
    population,
    flags
  } = country
  console.log(country)
  useEffect(() => {
    if (!loading && Object.keys(country).length === 0) {
      navigate('/')
    }
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <main>
      <img src={flags?.svg} alt={name.common} />
      <section>
        <h2>{name.common}</h2>
        <h2>
          currency
          {Object.values(currencies).map((curr) => {
            return (
              <p>
                <span> {curr.name}</span>
                <span> {curr.symbol}</span>
              </p>
            )
          })}
        </h2>
        <h2>
          {capital.map((cap) => {
            return <p>{cap}</p>
          })}
        </h2>
        <h2>{region}</h2>
        <h2>
          {Object.values(languages).map((lang) => {
            return <p>{lang}</p>
          })}
        </h2>
        <h2>
          {borders.map((bor) => {
            return <p>{bor}</p>
          })}
        </h2>
        <h2>
          {area} km <sup>2</sup>
        </h2>
        <h2>
          {population} ({millify(population)})
        </h2>
      </section>
    </main>
  )
}

export default Detail
