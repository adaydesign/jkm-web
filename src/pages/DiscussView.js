import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { guideList } from '../utils/listContent'
import { DiscussViewContainer } from '../components/guidediscuss';

const DiscussView = () => {

    const { id, discussId } = useParams()
    const [data, setData] = useState(null)
  
    useEffect(()=>{
      const target = guideList.find(i=>i.id===parseInt(id))
      const dc = target.discuss.find(d=>d.id===parseInt(discussId))
      setData(dc)
    },[id, discussId])
  
  
    if(!data){
      return "loading..."
    }

  return (
    <DiscussViewContainer data={data}/>
  )
}

export default DiscussView