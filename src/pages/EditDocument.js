import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { guideList } from '../utils/listContent'
import {EditDocumentContainer} from '../components/guideedit';

const EditDocument = () => {

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
    <EditDocumentContainer data={data}/>
  )
}

export default EditDocument