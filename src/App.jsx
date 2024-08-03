import { useReducer, createContext } from "react"
import ShowData from "./components/ShowData"
import Body from "./components/Body"


export const PersonContext = createContext(null)

  const reducer = (state, action) =>{
    switch(action.type){
      case 'set-name':
        return {...state, name: action.name}
      case 'set-weight':
        return {...state, weight: action.weight}
      case 'set-age':
        return {...state, age: action.age}
      default:
        return state
    }
  }

const App = () => {

  const [state, dispatch] = useReducer(reducer, {name: '', weight: 0.0, age: 0})
  return (

    <div>
      <h1>Hook useReducer and useContext</h1>
     
      <div>
        <PersonContext.Provider value={{state: state, dispatch: dispatch}}>
          <Body />
        </PersonContext.Provider>
      </div>
    </div>
  )
}

export default App
