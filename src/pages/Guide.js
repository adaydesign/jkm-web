import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GuideContainer from '../components/guide/GuideContainer';
import { guideList } from '../utils/listContent'

const Guide = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(()=>{
    const target = guideList.find(i=>i.id===parseInt(id))
    setData(target)
  },[id])


  if(!data){
    return "loading..."
  }

  return (
    <GuideContainer data={data}/>
  )
}

export default Guide