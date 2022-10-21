import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps'
import { useAppDispatch } from '../redux/hooks'
import { getCountry } from '../redux/slices/countrySlice'
import { useNavigate } from 'react-router-dom'

const MapChart = ({ setTooltipContent, content }) => {
  const [showMap, setShowMap] = useState(false)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleCountriesName = (e) => {
    if (content === 'Democratic Republic of Congo') {
      dispatch(getCountry('DR Congo'))
      navigate('/detail')
    } else {
      dispatch(getCountry(content))
      navigate('/detail')
    }
  }

  const handleResize = () => {}

  useLayoutEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 886) {
        setShowMap(!showMap)
      }
      if (window.innerWidth >= 889) {
        setShowMap(showMap)
      }
    }
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  if (showMap) {
    return (
      <div data-tip="" className="map">
        <ComposableMap className="map">
          <ZoomableGroup>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent('Please use search bar!!!')
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                    style={{
                      default: {
                        fill: 'gray',
                        outline: 'none'
                      },
                      hover: {
                        fill: 'gray',
                        outline: 'none',
                        cursor: 'not-allowed'
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none'
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  } else {
    return (
      <div data-tip="" className="map">
        <ComposableMap className="map">
          <ZoomableGroup>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountriesName(geo)}
                    onMouseEnter={() => {
                      setTooltipContent(geo.properties.name)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                    style={{
                      default: {
                        fill: 'black',
                        outline: 'none'
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none'
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default MapChart
