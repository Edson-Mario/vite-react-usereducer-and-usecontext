import {useContext} from 'react'
import { PersonContext } from '../App'

const ShowData = () => {
    const personContext = useContext(PersonContext)
  return (
    <div>
        <p>Name:  {personContext.state.name}</p>
        <p>Weight:  {personContext.state.weight}</p>
        <p>Age:  {personContext.state.age}</p>
    </div>
  )
}

export default ShowData
