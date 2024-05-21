
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items,title,heading,subHeading,img}) => {
    console.log(items);
    return (
      <>
     {  title && <Cover  heading={heading} subHeading={subHeading} img={img}    /> } 
        <div className='grid grid-cols-1 lg:grid-cols-2 my-7'>
        {
          items.map((item, index) => <MenuItem item={item} key={index}> </MenuItem>)
         }
        </div>
        <div className='flex justify-center items-center py-4'>
        <Link to='/shop' className='mx-auto' >
          <button className='py-3 px-2 text-center block text-blue-500 font-bold border-b-gray-800 border-b-4 rounded-3xl '>
          order now
          </button>
        </Link>
        </div>

      </>
    );
};

export default MenuCategory
