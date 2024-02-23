
import ImageUploaderComponent from './ImageUploaderComponent'
import '../../Home.css'
import { useState } from 'react'
const ProductImageUploadComponent = (props) => {
   
  // const {fileList , setFileList, setproductVariation, productVariation} = props
  
    // const OnFileChange = (fileArray) => {
    //     setFileList(fileArray)
    //     setproductVariation({...productVariation, images : fileArray })
    // }
  return (
    <div style={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
                 <ImageUploaderComponent 
                //  OnFileChange = {(files) => {OnFileChange(files)}} 
                  />
                 
                </div>
  )
}
export default ProductImageUploadComponent