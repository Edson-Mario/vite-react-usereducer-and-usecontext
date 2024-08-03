import {useContext} from 'react'
import { PersonContext } from '../App'

const Form = () => {
    const personContext = useContext(PersonContext)

  return (
    <div>
       <div className="flex gap-2">
        <input type="text" className="border p-2" placeholder="Insert your name"
        onChange={(event) => personContext.dispatch({type: "set-name", name: event.target.value})}
        />
        <input type="number" className="border p-2" placeholder="Insert your weight"
        onChange={(event) => personContext.dispatch({type: "set-weight", weight: event.target.value})}
        />
        <input type="number" className="border p-2" placeholder="Insert your age"
        onChange={(event) => personContext.dispatch({type: "set-age", age: event.target.value})}
        />
      </div>
    </div>
  )
}

export default Form
