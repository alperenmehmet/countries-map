import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import MapChart from './MapChart'
import SearchCountry from './SearchCountry'

const MapWrapper = () => {
  const [content, setContent] = useState('')

  return (
    <div>
      <SearchCountry />
      <MapChart setTooltipContent={setContent} content={content} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}

export default MapWrapper
