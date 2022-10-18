import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MapWrapper from '../components/MapWrapper'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapWrapper />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
