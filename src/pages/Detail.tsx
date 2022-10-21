import { useAppSelector } from '../redux/hooks'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import millify from 'millify'
import { FaCity } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import {
  BsPinMapFill,
  BsFillPeopleFill,
  BsFillMapFill,
  BsTranslate
} from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

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

  useEffect(() => {
    if (!loading && Object.keys(country).length === 0) {
      navigate('/')
    }
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <main className=" m-auto flex flex-wrap bg-stone-300">
      <h2 className="w-full text-center font-bold p-3 text-2xl uppercase">
        {name?.common}
      </h2>
      <div className="flex flex-col md:flex-row m-auto justify-center">
        <img
          className="w-[500px] h-[400px] m-auto min-w[300px] max-h-[300px] p-5 bg-stone-300"
          src={flags?.svg}
          alt={name?.common}
        />
        <section className="p-3">
          <div className="flex items-center justify-start p-2">
            <span className="inline-block w-[2rem] text-slate-600">
              <FaCity />
            </span>
            {capital?.map((cap, index) => {
              return <span key={index}>{cap}</span>
            })}
          </div>
          <div className="flex items-center justify-start p-2">
            <span className="inline-block w-[2rem] text-blue-600">
              <BiWorld />
            </span>
            {region}
          </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-orange-600">
              <BsTranslate />
            </span>
            {languages &&
              Object.values(languages).map((lang, index) => {
                return (
                  <p className="mr-1 " key={index}>
                    {' '}
                    {lang}{' '}
                  </p>
                )
              })}
          </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-emerald-700">
              <GiMoneyStack />
            </span>
            {currencies &&
              Object.values(currencies).map((curr, index) => {
                return (
                  <p className="mr-1" key={index}>
                    <span> {curr.name}</span>
                    <span> ({curr.symbol})</span>
                  </p>
                )
              })}
          </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-black">
              <BsFillPeopleFill />
            </span>
            {population} ({millify(population)})
          </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-cyan-600">
              <BsFillMapFill />
            </span>
            {borders?.map((bor, index) => {
              return (
                <span className="mr-1" key={index}>
                  {bor}
                </span>
              )
            })}
          </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-pink-600">
              <BsPinMapFill />
            </span>
            {area} KM <sup>2</sup>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Detail
