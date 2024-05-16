import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popular=data.filter(item=>item.category==='popular')
                setMenu(popular)
            })
            .catch(err => console.log(err))

    }
    , []);
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={"---Check it out---"}
            text={""} />
         <div className='grid grid-cols-1 lg:grid-cols-2'>
         {
            menu.map((item, index) => <MenuItem item={item} key={index}> </MenuItem>)
          }
         </div>
        </div>
    );
};

export default PopularMenu;