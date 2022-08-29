import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { guideList } from '../utils/listContent'
import { DiscussDocumentContainer } from '../components/guidediscuss';

const DiscussDocument = () => {

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
    <DiscussDocumentContainer data={data}/>
  )
}

export default DiscussDocument