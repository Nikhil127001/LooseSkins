
import { useEffect } from "react";
import images from '../images/white.jpg'
import ProductDetailsComponent from "../Components/productDetailsComponent";

const ProductDetailsPage = () => {
   
    useEffect(() => {
         console.log(window.history.state.data)   
    },[])
    return (
        <div className="ProductDetailsPage">
            <div className="ProductImagesContainer">
                <img className="displayImage" src={images} alt="loading">
                </img>
                <div className="allimageViewer" >
                    {['1', '1', '1', '1', '1', '1'].map((item, idx) => (
                        <div style={{ height: '150px', width: '90px', margin: '5px' }}>
                            <img height={'130px'} width={'90px'} style={{ backgroundColor: 'red', }} src={images} alt="loading">
                            </img>
                        </div>
                    ))}

                </div>
            </div>
            <ProductDetailsComponent />
        </div>
    )
}

export default ProductDetailsPage;