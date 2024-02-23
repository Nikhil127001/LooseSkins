import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FiShoppingBag } from 'react-icons/fi';
import Badge from '@mui/material/Badge';
import image from '../images/white.jpg'
import { AiOutlineHeart } from 'react-icons/ai';



const WishlistComponent = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
      <div style={{display: 'flex', position: 'fixed', top: 0, backgroundColor: 'white', width: '400px', height: '50px', justifyContent: 'center', alignItems: 'center' }}><h5 >Wishlist</h5>
</div>
      <div  className='cartComponentContainer2'>
        

      {['1', '1', '1', '1', '1', '1', '1',].map((item, idx) => (
        
          <div key={idx}className='cartproducts'>
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
                <button className='removeBtn'>Move to Cart</button>
                <button className='removeBtn'>Remove Item</button>
              </div>

            </div>
          </div>
        
      ))}
     </div>
    </Box>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <button style={{ color: 'black', fontSize: '25px', height: '100%', backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={toggleDrawer(anchor, true)}><Badge badgeContent={4} color={"error"}><AiOutlineHeart />
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
export default WishlistComponent