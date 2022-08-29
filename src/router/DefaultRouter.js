import { Route, Routes } from 'react-router-dom'
import { Home, Guide, NewDocument,EditDocument,DiscussDocument, DiscussView, NewDiscussDocument } from '../pages'

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewDocument />} />
      <Route path="guide">
        <Route path=":id" element={<Guide />} />
        <Route path=":id/edit" element={<EditDocument />} />
        <Route path=":id/discuss" element={<DiscussDocument />} />
        <Route path=":id/discuss/:discussId" element={<DiscussView />} />
        <Route path=":id/newdiscuss" element={<NewDiscussDocument />} />
      </Route>
    </Routes>
  )
}

export default DefaultRouter