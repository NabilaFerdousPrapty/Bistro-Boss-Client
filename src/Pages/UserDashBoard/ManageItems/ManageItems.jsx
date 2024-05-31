import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import UseMenu from '../../../hooks/UseMenu';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import UseCart from '../../../hooks/UseCart';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const axiosSecure = UseAxiosSecure();
    const [menu,laoding,refetch] = UseMenu();
    const handleDeleteItem=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then( async(result) => {
            if (result.isConfirmed) {
              const res= await  axiosSecure.delete(`/menu/${item._id}`)
              console.log(res.data);
              console.log(res.data.deletedCount);
              if (res.data.deletedCount) {
                Swal.fire(
                    {
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        showConfirmButton: false,
                    }
                    
                );
                refetch();
                
              }
            }
          });
    }
    
    return (
        <div>
          <SectionTitle heading="---Hurry Up!---" subHeading='MANAGE ALL ITEMS'/>

          <div>
          <div className="container p-2 mx-auto sm:p-4 text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">
        All Items in the Menu {menu.length}
    </h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-300">
				<tr className="text-left">
					<th className="p-3">INDEX</th>
					<th className="p-3">ITEM IMAGE</th>
					<th className="p-3">ITEM NAME</th>
					<th className="p-3">PRICE</th>
					<th className="p-3 text-right">ACTION</th>
					<th className="p-3">ACTION</th>
				</tr>
			</thead>
			<tbody>
                {
                    menu.map((item, index) => <tr item={item} key={menu._id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td>{index+1}</td>
					<td className="p-3">
						<p>
                            <img src={item.image} alt="" className='w-8' />
                        </p>
					</td>
					<td className="p-3">
						<p>
                            {item.name}
                        </p>
					</td>
					<td className="p-3">
					{
                        item.price
                    }
					</td>
                    <td className="relative">
                   <Link to={`/dashboard/updateItem/${item._id}`}>
                   <button 
                      
                      className={`btn bg-[#D1A054] `}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                     
                    </button>
                   
                   </Link>
                </td>
                <td>
                  <button onClick={()=>handleDeleteItem(item)}
                    
                    className="btn bg-[#B91C1C]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 11V17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 11V17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
				</tr>)
                }
				
				
			</tbody>
		</table>
	</div>
</div>
          </div>
        </div>
    );
};

export default ManageItems;
