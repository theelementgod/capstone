import { ChangeEvent, useState, useEffect } from "react"
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage"
import Nav from "../../components/Nav/Nav"
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/js/src/modal'

const CharacterSheets = () => {
  
  const [imageUpload, setImageUpload] = useState<File | null>(null)
  const [imageList, setImageList] = useState([])

const imageListRef = ref(storage, 'characterSheets/')
  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `characterSheets/${imageUpload.name}`)
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
      <div className="character-sheets-background">
        <h1 className="character-sheets-header text-center">Character Sheets</h1>
        <div className="text-center">
          <input 
          type="file" 
          onChange={(event:ChangeEvent<HTMLInputElement>) => {
            const imageFile = event.target.files
            if (imageFile) {
              setImageUpload(imageFile[0])}}

            }/>
          <button onClick={uploadImage}>Upload Image</button>
        </div>

        <div className="imageContainer text-center">
          {imageList.map(([url, ref]) => {
              return <div key={url}>
              <img 
                data-bs-toggle="modal" 
                data-bs-target="#imagePopout" 
                className="uploadedImages" 
                src={url}
              />
              <div className="modal fade" id="imagePopout" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                      </button>
                      <img src={url} className="d-block w-100" />
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => {deleteImage(ref)}}>DELETE</button>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
export default CharacterSheets