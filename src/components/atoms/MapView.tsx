 
const pointFetch = async()=>{
    const res =  await fetch("https://www.jsonkeeper.com/b/5NPS")
  const searchResults = await res.json() 
  return searchResults
}
const MapView = async() => {
const data = await pointFetch()
    console.log(data);
    

  return (
    <div>{ /*  data.map((res:any)=> <p>{res.title}</p> ) */ }</div>
  )
}

export default MapView 