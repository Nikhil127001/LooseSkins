import {BsCloudUpload} from 'react-icons/bs'
import { TiTick } from "react-icons/ti";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setSelectedImages } from '../../Redux/reducer';
import { useDispatch } from 'react-redux';
const ImageUploaderComponent = (props) => {

    const dispatch = useDispatch();
    const selectedImages = useSelector(state => state.myReducer.selectedImages) 
    
    const handleSelectedImages = (item) => {
      if(!selectedImages.includes(item)){
      const updatedImages = [...selectedImages,item]
      dispatch(setSelectedImages(updatedImages));
      }
    }

    const unselectImage = (item) => {
      const updatedItems = selectedImages.filter((items) => items !== item);
      dispatch(setSelectedImages(updatedItems));

    }

    const OnFileChangeHandler = (e) => {
      console.log(e.target.files[0]);
    }

  return (
    <>
    <h6>Select Images</h6>
    <div style={{height: '200px' , width : '99%' , backgroundColor: '#E2E6EB', display: 'flex', overflow: 'scroll', flexWrap: 'wrap', justifyContent: 'center'}}>
      {["https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/honda_uw9jhr.jpg","https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/ford_obyojt.jpg","https://res.cloudinary.com/deumuo4ko/image/upload/v1696331375/cheverolet_omo2pk.jpg","https://res.cloudinary.com/deumuo4ko/image/upload/v1696331377/nissan_aetbp3.jpg","https://res.cloudinary.com/deumuo4ko/image/upload/v1696331376/hyundai_zd5ty1.jpg","https://res.cloudinary.com/deumuo4ko/image/upload/v1696333066/BMW_vvt5ve.jpg"].map((item,idx) => (
       <div style={{position: 'relative'}} key={idx}>
         <h4 className="remove_btn" style={{position: 'absolute', right : 0, display: `${selectedImages &&selectedImages.includes(item) ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'center'  }}  onClick={() => {unselectImage(item)}}  ><TiTick/></h4>
         <img onClick={() => {handleSelectedImages(item)}} height={'120px'} width={'80px'} style={{margin: '15px'}} src={item}></img>
       </div>
      ))}
    </div>
    <h6>OR</h6>
    <div
    className='Upload_Image_Container'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '99%'}}> <BsCloudUpload className="upload_Image"/>
    <p style={{fontWeight: '600' , color: 'grey'}}>Drop images or click here to select new images</p>
    <input  
    onChange={OnFileChangeHandler} 
     type="file" value='' /></div>
    </div>
    <button style={{margin: '2px'}} className='addtocartBtn'>Upload Images</button>
    </>
    
  )
}
export default ImageUploaderComponent