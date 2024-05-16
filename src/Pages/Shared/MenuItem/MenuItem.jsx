import React from 'react';

const MenuItem = ({item}) => {
    const {name,image,price,category,recipe}=item
    return (
       <div className='flex justify-between items-center gap-4 p-4'>
        <img src={image} alt="" style={{borderRadius:'0px 200px 200px 200px'}} className='w-[128px]  ' />
        <div>
        <h2 className='uppercase'>{name}...</h2>
        <p>{recipe}</p>
       
        </div>
        <p className='font-bold text-[#BB8506]'>${price}</p>
       </div>
    );
};

export default MenuItem;