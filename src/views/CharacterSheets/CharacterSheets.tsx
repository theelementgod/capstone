import { ChangeEvent, useState } from "react"
import { storage } from "../../firebase"
import { ref, uploadBytes } from "firebase/storage"
import Nav from "../../components/Nav/Nav"

const CharacterSheets = () => {
  
  const [imageUpload, setImageUpload] = useState<File | null>(null)
  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image Uploaded')
    })
  }

  return (
    <>
      <Nav/>
      <input 
      type="file" 
      onChange={(event:ChangeEvent<HTMLInputElement>) => {
        const imageFile = event.target.files
        if (imageFile) {
          setImageUpload(imageFile[0])}}

        }/>
      <button onClick={uploadImage}>Upload File</button>
    </>
  )
}
export default CharacterSheets