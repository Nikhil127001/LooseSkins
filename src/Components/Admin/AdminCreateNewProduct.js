import AdminNavComponent from "./AdminNavComponent"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from "@mui/material";
import ProductImageUploadComponent from "./ProductImageUploadComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedImages } from "../../Redux/reducer";

const AdminCreateNewProduct = () => {
  const dispatch = useDispatch();
  const Images = useSelector(state => state.myReducer.selectedImages) 
  const [fileList , setFileList] = React.useState([]);
  const [AllVariations , setInAllVariations ] = React.useState([]);
  const [productVariation, setproductVariation] = React.useState({ color: '', size: '', quantity: '', colorCode: '', images : [],listingPrice : '' , priceAfterDiscount : '', discount: '' })
  const [discount , setdiscount] = React.useState('')

  const [Product , setProduct] = React.useState({name : '' , productDescription : '' , materialDescription : '',category : '',subCategory : '', allVariations : [] })

  const handleRemove = (remove) => {
    const updatedData  = AllVariations.filter((item) => item !== remove)
    setInAllVariations(updatedData)
  }

  const handleRemoveFile = (item) => {
    const updatedList = fileList.filter((file) => file !== item);
setFileList(updatedList);
}

const calculateDiscount = () => {
    if(productVariation.listingPrice !== '' && productVariation.priceAfterDiscount !== ''){
      const Discount =((productVariation.listingPrice-productVariation.priceAfterDiscount)/productVariation.listingPrice)*100;
        setdiscount(Discount)
        setproductVariation({...productVariation, discount: Discount})
    }
    else{
      setdiscount('')
    }
}

  const addVariationHandler = () => {
    if(productVariation.color == '' || productVariation.size == '' || productVariation.quantity == ''|| productVariation.colorCode == ''|| productVariation.listingPrice == ''){
      return alert('all Fields required')
    }else{
      setInAllVariations((AllVariations) =>[...AllVariations, productVariation]);
      setproductVariation({ color: '', size: '', quantity: '', colorCode: '', images: [],listingPrice:'',priceAfterDiscount: '', discount: '' });

      setProduct({...Product,allVariations : AllVariations})
      setFileList([]);
      dispatch(setSelectedImages([]))

      const currentSelect = document.getElementById('selectSize');
      currentSelect.value = 'Select Size'
      const addquantity = document.getElementById('addQuantity')
      addquantity.value = ''
      const selectColor = document.getElementById('selectColor')
      selectColor.value = 'Select Color'
      const ColorCode = document.getElementById('ColorCode')
      ColorCode.value = ''
    }
  }

  const addProductHandler = () => {
    if((Product.name && Product.productDescription && Product.materialDescription && Product.allVariations && Product.category && Product.subCategory) !== ''){
      console.log(Product);
    }else{
      return alert('all fields required')
    }
  }

  const updateImages = () => {
      const updatedproductVariation = {...productVariation , images : Images}
      setproductVariation(updatedproductVariation);
  }

  React.useEffect(() => {    
    calculateDiscount()
  }, [productVariation])

  React.useEffect(() => {    
    updateImages()
  }, [Images])

  return (
    <div style={{ display: 'flex' }}>
      <AdminNavComponent />
      <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#F2F6FC', justifyContent: 'center' }}>
        <div className="CreateProductContainer" >
          <h5 style={{ margin: '10px' }}>Create New Product</h5>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextField  onChange={(e) =>{setProduct({...Product , name : e.target.value})}} style={{ width: '98%' }}
                required
                id="outlined-required"
                label="Product Name"
                defaultValue=""
              />
              
              <TextareaAutosize onChange={(e) =>{setProduct({...Product , productDescription : e.target.value})}} style={{ width: '98%', height: '100px', backgroundColor: '#F2F6FC', borderRadius: '4px' }}
                placeholder="Product Description"
                sx={{
                  '--Textarea-focused': 1,
                }}
              />
              <TextareaAutosize onChange={(e) =>{setProduct({...Product , materialDescription : e.target.value})}} style={{ width: '98%', height: '100px', marginTop: '5px', marginBottom: '5px',backgroundColor: '#F2F6FC', borderRadius: '4px' }}
                placeholder="Material Description"
                sx={{
                  '--Textarea-focused': 1,
                }}
              />
              <div style={{ width: '98%', border: '1px solid grey', borderRadius: '4px', marginBottom: '8px' }}>
              <h6 style={{ margin: '10px' }} >Select Category</h6>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>               
                  <select onChange={(e) =>{setProduct({...Product , category : e.target.value})}} defaultValue="Select Category" style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option >Select Category</option>
                    <option>MEN</option>
                    <option>WOMEN</option>
                    <option>POSTERS</option>
                    <option>NEW ARRIVALS</option>
                    <option>ACCESSORIES</option>
                    <option>THEMES</option>
                  </select>
                  <select onChange={(e) =>{setProduct({...Product , subCategory : e.target.value})}} defaultValue="Select-Sub Category" style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option>Select-Sub Category</option>
                    <option>Top Wear</option>
                    <option>Bottom Wear</option>
                    <option>Jackets</option>
                    <option>Sweatshirts</option>
                    <option>Winter Wear</option>
                    <option>Joggers</option>
                  </select>
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                    <TextField style={{ width: '50%' }}
                      id="outlined-required"
                      label="New Category"
                      defaultValue=""
                    />
                    <TextField style={{ width: '50%' }}
                      id="outlined-required"
                      label="New Sub-Category"
                      defaultValue=""
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'center', margin: '8px' }}>
                    <button style={{ width: '100%', height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '4px', fontWeight: '600' , fontSize: '13px', color: 'grey' }} name="add_category">Add</button>
                  </div>
                </div>
              </div>
              <div style={{ width: '98%', border: '1px solid grey', borderRadius: '4px',marginBottom: '8px' }}>
                <h6 style={{ margin: '10px' }} >Add Size,Quantity,Images and Color to Variation</h6>
                <div style={{display: 'flex' ,alignItems: 'center' , justifyContent: 'space-between', width : '100%', flexDirection: 'column'}}>


                {AllVariations && AllVariations.map((item , idx) => (
                <div style={{position: 'relative', width: '100%'}} key={idx}>  
                <div  style={{display: 'flex' , flexDirection: 'column', justifyContent: 'space-between', width : '98%', margin: '5px', border: '1px dashed grey'}}>
                <div > 
               <text><b>Size : </b>{item.size}, <b>Quantity : </b>{item.quantity}, <b>Colour : </b>{item.color}, <b>Colour Code : </b>{item.colorCode}, <b>Listing Price : </b>{item.listingPrice}, <b>Price After Discount : </b>{item.priceAfterDiscount}, <b>Discount Percent : </b>{item.discount}%</text>
              </div>
              <div style={{ display: 'flex'}}>{item.images && item.images.map((image,idx) =>(
                <img style={{border: '1px dashed black', margin: '5px'}} key={idx} height={'80px'} width={'60px'} src={image}></img>
              ))}</div>             
              </div>
              <h4 className="remove_btn" style={{position: 'absolute', right: 0, top: 0,display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(() => {handleRemove(item)})}>X</h4></div>                 
                ))}
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <select id="selectSize" onChange={(e) => { e.target.value !== 'Select Size' && setproductVariation({...productVariation, size: e.target.value }) }} defaultValue="Select Size" style={{ width: '50%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option>Select Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                  <TextField id="addQuantity" onChange={(e) => { setproductVariation({...productVariation, quantity: e.target.value }) }} style={{ width: '50%' }}
                    classes="filled-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', margin: '8px' }}>
                  <select id="selectColor" onChange={(e) => { e.target.value !== 'Select Color' && setproductVariation({...productVariation, color: e.target.value }) }} defaultValue="Select Color" style={{ width: '33%', backgroundColor: '#F0F0F0', border: 'none', height: '55px', borderBottom: '1px solid grey', margin: '8px', fontWeight: '600', color: 'grey' }}>
                    <option >Select Color</option>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Grey</option>
                  </select>
                    <TextField  style={{ width: '33%' }}
                      id="outlined-required"
                      label="Color Name"
                      defaultValue=""
                    />
                    <TextField  id = 'ColorCode' onChange={(e) => {setproductVariation({...productVariation, colorCode: e.target.value }) }} style={{ width: '33%' }}
                      label="Color Code"
                      defaultValue=""
                    />
                    <button type="button" style={{ width: '33%', height: '55px', margin: '5px', border: '1px solid grey', borderRadius: '4px', fontSize: '13px', fontWeight: '700', color: 'grey' }} name="add_category">Add New Color</button>
                  </div>
                </div>
                <div style={{
                width: '100%', display: 'flex', alignItems:
                  'center',
                justifyContent: 'center', flexDirection: 'column'
              }}>
                <ProductImageUploadComponent/>
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                <TextField onChange={(e) => { setproductVariation({...productVariation, listingPrice: e.target.value }) }} style={{ width: '33%' }}
                  classes="filled-number"
                  label="Listing Price"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField onChange={(e) => { setproductVariation({...productVariation, priceAfterDiscount: e.target.value }) }} style={{ width: '33%' }}
                  classes="filled-number"
                  label="Price After Discount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField style={{ width: '33%' }}
                  disabled
                  classes="filled-disabled"
                  label="Calculated Discount"
                      value={discount}
                    />
              </div>
                <div style={{display: 'flex' , alignItems : 'center' , justifyContent: 'center' , width : '100%'}}>
                <button type="button" onClick={() => {addVariationHandler()}} style={{ width: '98%', marginBottom: '10px' }} className="mailBtn">Add Product Variation</button>
                </div>
              </div> 
            </div>
            <button type="button" onClick={() => {addProductHandler()}}  style = {{width: '100%'}}className="addtocartBtn">Create Product</button>
          </Box>
        </div>
      </div>
    </div>
  )
}
export default AdminCreateNewProduct