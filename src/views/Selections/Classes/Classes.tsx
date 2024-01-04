import { useEffect, useState } from "react"
import Nav from "../../../components/Nav/Nav"

const Classes = () => {

  interface IClassList {
    class: string
  }

  const [classList, setClassList] = useState<IClassList[]>([])


  const url = 'https://www.dnd5eapi.co/api/classes'

    const getData = async () => {
        const response = await fetch(`${url}`)
        const data = await response.json()
        console.log(data.results)
        for(let idx in data.results){
          for(let i=0; i<idx.length; i++){
            console.log(data.results[idx].name)
            setClassList([...classList, data.results[idx].name])
            console.log(idx)
        }}
        console.log(classList)
    }

  useEffect(() => {
    getData()
  }, [])

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