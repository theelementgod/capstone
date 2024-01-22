import { useEffect, useState } from "react"
import Nav from "../../../components/Nav/Nav"

const Classes = () => {

  interface IClassList {
    class: string
  }

  const [classList, setClassList] = useState<IClassList[]>([])

  const itemsToDisplay = []


  const url = 'https://www.dnd5eapi.co/api/classes'

    const getData = async () => {
        const response = await fetch(`${url}`)
        const data = await response.json()
        console.log(data.results)
        for(let idx in data.results){
          for(let i=0; (i<(idx.length)); i++){
            console.log(data.results[idx].name)
            const listItem = data.results[idx].name
            
            setClassList([...classList, listItem])
            console.log(classList)
        }}
    }

  useEffect(() => {
    getData()
  }, [])

  const renderButtons = colors => {
    return colors.map( (color, index) => {
      return ( <li key={index}
        className={'color-selector ' + color}
        onClick={() => setColor(color)}>
      </li> )
    })
  }

  return (
    <>
      <Nav/>
      <div>
        {classList}
      </div>
    </>
  )
}
export default Classes