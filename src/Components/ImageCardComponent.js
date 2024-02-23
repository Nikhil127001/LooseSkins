import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import '../Home.css'
import image from '../images/white.jpg'
import { useDispatch } from 'react-redux';
export default function ImgMediaCard(props) {
    const { properties } = props;
    const dispatch = useDispatch();

    const NavigateToproductDetailsPafge = () => {
        
        window.history.pushState({data : 'product Id'} , '' , '/productDetails');
        window.location.href = '/productDetails'
    }

    return (
        <div onClick={NavigateToproductDetailsPafge} className='ProductCard'>
            <div  className='ImageComponent'>
                <img style = {{height : '100%'}}className='ImageSize' src={image} alt='Nothing to Show' />
                <div>
                    <text className='year_button'>For Rent</text>
                    <button className='fav_button'>
                        <i class="bi bi-heart"></i>

                    </button>

                </div>

            </div>

            <CardContent className='cardBottomComp'>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <i style={{ fontSize: '10px', marginRight: '4px' }} class="bi bi-geo-alt"></i>
                    <text className='text'>
                        {properties.location}
                    </text>
                </div>
                <div className='cardDetails'>

                    <text style={{ lineHeight: 1.2, marginBottom: '5px', marginTop: '5px', fontWeight: '600', width: '100%'}}>{properties.propertyName}</text> 
                </div>

                <div className='Card_Bottom'>
                    <text>
                        <text style={{ fontSize: '16px', color: 'blue', fontWeight: '500' }}>${properties.rentPermonthinDollars}</text><text style={{ fontSize: '13px', fontWeight: '500' }}>/month</text>
                    </text>
                </div>
            </CardContent>
        </div>
    );
}