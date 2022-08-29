import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { guideList } from '../utils/listContent'
import { NewDiscussDocumentContainer } from '../components/guidediscuss';

const NewDiscussDocument = () => {

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
    <NewDiscussDocumentContainer data={data}/>
  )
}

export default NewDiscussDocument