import { useEffect, useState } from 'react';
import '../Home.css'
import ImgMediaCard from './ImageCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import properties from '../properties';
import SideNavbar from './sideNavbar';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';

const Body = (props) => {
  const dispatch = useDispatch();
  const searchedproperties = useSelector((state) => state.myReducer.propertiesData)
  let endingIndex = useSelector((state) => state.myReducer.endingIndex)
  const [filteredCityProperties, setFilteredCityProperties] = useState([]);
  const [Properties, setproperties] = useState([])
  const [filterComponent, setFilter] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openSort , setopenSort] =  useState(false);

  const initialisePropertyDisplay = () => {
    setproperties(properties)
  }

  const setFilterComponent = () => {
    setFilter(!filterComponent);
  }
  const updateWindowDimensions = () => {
    setScreenWidth(window.innerWidth);
  };


  useEffect(() => {
    initialisePropertyDisplay();
    window.addEventListener('resize', updateWindowDimensions);

  }, [])


  const styles = {
    '@media (max-width: 600px)': {
      container: {
        backgroundColor: 'lightblue',
      },
    },
  };



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  // DRAWER code
  const list = (anchor) => (
    <SideNavbar />
  );

  return (
    <>
     {openSort  && <div style={{ display: 'flex', alignItems: 'center' ,width: '100%', justifyContent: 'flex-end'}} > 
      <select   className='' style={{borderRadius: '5px',margin: '5px', display: 'none'}}>
        <option >
          All Products
        </option>
        <option>
          Trending right now
        </option>
        <option>
          Price: Low-High
        </option>
        <option>
        Price: High-Low
        </option>
      </select>
      </div>}
      <div className='whole_container'>
        
        {screenWidth >= 910 && <SideNavbar />}
        <div className="Body_Outer">
          <div className="Body_Inner row ">
            {
              (filteredCityProperties.length != 0 ? filteredCityProperties : Properties).map((properties, idx) => (
                <ImgMediaCard  key={idx} properties={properties} />
              )
              )
            }
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='btnContainer2'>

        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <button className='loginBtn' onClick={toggleDrawer(anchor, true)}>Filter</button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}

        <div style={{ display: 'flex', alignItems: 'center' ,width: '50%',height: '100%', justifyContent: 'flex-end', alignItems: 'center'}} > 
      <select style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100%', width: '100%'}}>
        <option  style={{}} >
          <text style={{backgroundColor: 'red', color: 'yellow'}}>Sort By</text>
        </option>
        <option>
          Trending right now
        </option>
        <option>
          Price: Low-High
        </option>
        <option>
        Price: High-Low
        </option>
      </select>
      </div>
      </div>
    </>

  )
}

export default Body;
