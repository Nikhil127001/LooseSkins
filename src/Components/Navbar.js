
import { AiOutlineSearch } from 'react-icons/ai';

import * as React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import image from '../images/looseskins.gif'
import UserCart from './UserCart';
import WishlistComponent from './wishlistComponent';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CategoriesCompo from './CategoriesCompo';
import LoginDialogComponent from './LoginDialogComponent';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const Navbar = () => {
    const [tabIdx, setidx] = React.useState('');
    const [categoresComponent, setCategoresItem] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // DRAWER CODE
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '250px', height: '70px' }}>
                    <img height={'65px'} width={'120px'} src={image}>
                    </img>
                    <h6 style={{ paddingTop: '7px', overflow: 'hidden' }}>Hii! Nikhil Kumar Prajapati</h6>
                </div>
                <div className='WEBSCREENNAV2' >
                    {['MEN', 'WOMEN', 'POSTERS'].map((item, idx) => (
                        <text className='tabBtn' key={idx} onClick={() => { setidx(idx) }} style={{ fontSize: '18px', color: `${tabIdx === idx ? '#5E17EB' : 'white'}`, backgroundColor: `${tabIdx === idx ? 'white' : '#5E17EB'}`, height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `${tabIdx === idx ? '4px solid #5E17EB' : ''}`, width: '100px', fontWeight: `${tabIdx === idx ? 'bold' : '400'}` }}>
                            {item}
                        </text>
                    ))}

                    <div style={{ marginTop: '70px' }} className='categoriesWindow2'>
                        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', zIndex: '3', borderRadius: '5px', maxWidth: '900px' }}>

                            {['Top Wear', 'Bottom Wear', 'Posters', 'collections', 'Big Discount'].map((item, idx) => (
                                <div className='categoriesBlocks'>

                                    <Accordion style={{ width: '100%', border: '0px', boxShadow: 'none' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{item}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <li><a href='#'>T-shirts</a></li>

                                                <li><a href='#'>plain-T-shirts</a></li>

                                                <li><a href='#'>Lowers</a></li>

                                                <li><a href='#'>Goggels</a></li>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                            <div style={{ borderBottom: '1px solid grey', width: '100%' }} />
                            <div style={{ padding: '16px' }}>
                                <li><a href='#'>My Orders</a></li>
                                <li><a href='#'>Profile</a></li>
                                <li><a href='#'>Log Out</a></li>
                            </div>
                            <div style={{ borderBottom: '1px solid grey', width: '100%' }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    return (
        <>
            {categoresComponent && 
            <CategoriesCompo setCategoresItem ={setCategoresItem }/>
            }
            <div className="Navbar_Outer">
                <div className="Navbar_Inner">
                    <div>
                        <img height={'65px'} width={'120px'} src={image}>
                        </img>
                    </div>
                    <div style={{ display: 'flex', width: '250px', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <LoginDialogComponent/>
                        <AiOutlineSearch style={{fontSize: '40px'}}/>
                        <UserCart />
                        <WishlistComponent />
                    </div> 
                    
                   
                </div>
            </div>
            <div className="Navbar_Outer2">
                <div className="Navbar_Inner2">

                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <button className='shortScreenButton' onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize="large" /></button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                    <div className='WEBSCREENNAV' >
                        {['MEN', 'WOMEN', 'POSTERS'].map((item, idx) => (
                            <text onMouseLeave={() => { setCategoresItem(false) }} onMouseEnter={() => { setCategoresItem(true) }} className='tabBtn' key={idx} onClick={() => { setidx(idx) }} style={{ fontSize: '18px', color: `${tabIdx === idx ? '#5E17EB' : 'white'}`, backgroundColor: `${tabIdx === idx ? 'white' : '#5E17EB'}`, height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `${tabIdx === idx ? '4px solid #5E17EB' : ''}`, width: '100px', fontWeight: `${tabIdx === idx ? 'bold' : '400'}` }}>
                                {item}
                            </text>
                        ))}
                    </div>
                    <div className='profileIcon'>
                        <div>

                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <AiOutlineUser style={{ fontSize: '25px', color: 'white' }} />

                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My Orders</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}



export default Navbar;