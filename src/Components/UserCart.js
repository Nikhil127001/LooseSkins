import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FiShoppingBag } from 'react-icons/fi';
import Badge from '@mui/material/Badge';
import image from '../images/white.jpg'


const UserCart = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const goToCheckout = () => {
    // window.history.pushState({data: 'this data is coming from User Cart'}, '', '/checkout')
    window.location.href = '/checkout';

    
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ display: 'flex', position: 'fixed', top: 0, backgroundColor: 'white', width: '400px', height: '50px', justifyContent: 'center', alignItems: 'center' }}><h5 >Your Bag</h5>
      </div>
      <div className='cartComponentContainer'>
        {['1', '1', '1', '1', '1', '1', '1', '1', '1', '1',].map((item, idx) => (
          <div key={idx} className='cartproducts'>
            <img height={'100%'} width={'125px'} src={image}></img>
            <div className='cartProductDetails'>
              <h6>Mens Blue All Over printed T-shirt</h6>

              <div style={{ display: 'flex', justifyContent: 'space-around', }}>
                <div> <div>
                  <li style={{ backgroundColor: 'white', border: '1px dashed grey', fontSize: '12px', width: '40px', listStyle: 'none' }}>4.5 🌟</li>
                  <text style={{ textDecoration: 'line-through', fontSize: '13px' }}>₹999</text>
                  <text style={{ fontSize: '10px', color: 'green' }}>   50% OFF</text>
                </div>
                  <div style={{ fontSize: '18px' }}><text>₹499 </text></div></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <text style={{ fontSize: '13px' }}>Size</text>
                    <select className='selectBox'>
                      <option className='options'>XS</option>
                      <option className='options'>S</option>
                      <option className='options'>M</option>
                      <option className='options'>L</option>
                      <option className='options'>XL</option>
                      <option className='options'>XXL</option>
                    </select>
                  </div>
                  <div>
                    <text style={{ fontSize: '13px' }}>Qty </text>
                    <select className='selectBox'>
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((item, idx) => (
                        <option key={idx} className='options'>{item}</option>
                      ))}

                    </select>
                  </div>
                </div>
              </div>
              <div style={{ width: '100%', height: '30px', display: 'flex', justifyContent: 'space-between', paddingRight: '5px' }}>
                <button className='removeBtn'>Remove Item</button>
                <button className='removeBtn'>Save For Later</button>
              </div>

            </div>
          </div>

        ))}
      </div>
      <div style={{ display: 'flex', position: 'fixed', bottom: 0, backgroundColor: '#F5F5F5', width: '400px', height: '250px', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid grey', fontSize: '13px', fontWeight: 'bold' }}>
        <div>
          <h5>Bag Summary</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '370px' }}>
            <text>Total Amount</text>
            <text>₹999</text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <text>Shipping Charges</text>
            <text>₹70</text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <text>Bag Discount</text>
            <text>-₹500</text>
          </div>
          <hr />
          <div style={{ width: '370px', backgroundColor: '#FCDA58', height: '30px', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>
              <text>Subtotal</text>
              <text>₹569</text>
            </div>

          </div>
          <hr />
          <button onClick={goToCheckout} style={{ width: '370px', marginTop: '10px' }} className='addtocartBtn'>
          Proceed To Checkout</button>
        </div>
      </div>
    </Box>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <button style={{ color: 'black', fontSize: '25px', height: '100%', backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={toggleDrawer(anchor, true)}><Badge badgeContent={4} color={"error"}><FiShoppingBag />
          </Badge></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
export default UserCart