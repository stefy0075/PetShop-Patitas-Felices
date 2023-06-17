async function getData(url) {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error("Ocurrio el error: ",response.status)
  }
  const data = await response.json()
  return data
}
export default getData