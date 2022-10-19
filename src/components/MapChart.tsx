import React from 'react'
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
//TODO: DEMOCRATIC REPUBLIC OF CONGO, UNITED STATES

export default MapChart
