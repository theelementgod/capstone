
const Classes = () => {


  const url = 'https://www.dnd5eapi.co/api/classes'

    const getData = async () => {
        const response = await fetch(`${url}`)
        const data = await response.json()
        console.log(data.results[0].name)
        console.log(data.results[1].name)
        console.log(data.results[2].name)
        console.log(data.results[3].name)
        console.log(data.results[4].name)
        console.log(data.results[5].name)
        console.log(data.results[6].name)
        console.log(data.results[7].name)
        console.log(data.results[8].name)
        console.log(data.results[9].name)
        console.log(data.results[10].name)
        console.log(data.results[11].name)
    }
getData()

  return (
    <>

    </>
  )
}
export default Classes