import { ChangeEvent, useState, useEffect } from "react"
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage"
import Nav from "../../components/Nav/Nav"

const Resources = () => {
  
  const [imageUpload, setImageUpload] = useState<File | null>(null)
  const [imageList, setImageList] = useState([])

const imageListRef = ref(storage, 'resources/')
  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `resources/${imageUpload.name}`)
    console.log(imageRef)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const toop = [url, imageRef]
        setImageList((prev) => [...prev, toop])

      })
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response.items)
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const toop = [url, item]
          setImageList((prev) => [...prev, toop])
          
        })
      })
    })
  }, [])

  const deleteImage = (ref) => {
    console.log(ref)
    deleteObject(ref).then(() => {
      setImageList((prev) => prev.filter((toop) => toop[1] !== ref))

      })}

  return (
    <>
      <Nav/>
      <h1 className="text-center">Resources</h1>
      <div>
        <input 
        type="file" 
        onChange={(event:ChangeEvent<HTMLInputElement>) => {
          const imageFile = event.target.files
          if (imageFile) {
            setImageUpload(imageFile[0])}}
          }/>
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <br/>

      <div className="imageContainer">
        {imageList.map(([url, ref]) => {
            return <div key={url}>
            <img className="uploadedImages" src={url}/>
            <button onClick={() => {deleteImage(ref)}}>DELETE</button>
          </div>
        })}
      </div>
    </>
  )
}
export default Resources