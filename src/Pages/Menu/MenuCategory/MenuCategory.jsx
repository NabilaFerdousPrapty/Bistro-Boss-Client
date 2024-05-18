
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

      </>
    );
};

export default MenuCategory
