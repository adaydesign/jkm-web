import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

const DefaultRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default DefaultRouter