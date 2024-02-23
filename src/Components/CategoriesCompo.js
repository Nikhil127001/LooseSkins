import * as React from 'react';

const CategoriesCompo = ({setCategoresItem}) => {

  return (
    <div className='categoriesWindow'>
                <div onMouseLeave={() => { setCategoresItem(false) }} onMouseEnter={() => { setCategoresItem(true) }} style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: `rgba(255,255,255,0.7)`, zIndex: '3', borderRadius: '5px', maxWidth: '900px' }}>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
                        <div key={idx} className='categoriesBlocks'>
                            <text style={{ fontWeight: 'bold' }}>Top Wear</text>
                            <ul>
                                <li><a href='#'>T-shirts</a></li>

                                <li><a href='#'>plain-T-shirts</a></li>

                                <li><a href='#'>Lowers</a></li>

                                <li><a href='#'>Goggels</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
  )
}
export default CategoriesCompo