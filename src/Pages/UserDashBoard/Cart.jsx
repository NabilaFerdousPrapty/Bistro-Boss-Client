import React from "react";
import UseCart from "../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const Cart = () => {
  const [refetch, cart] = UseCart();
  const axiosSecure=UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if (res.data.deletedCount>0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      }); 
                }
                refetch();
                
            }

            )
            
         
        }
      });
  };
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <div className="flex justify-evenly items-center py-7">
        <h2 className="5xl">Total items: {cart.length}</h2>
        <h2 className="5xl">Total Price: {totalPrice}</h2>
        <div className="btn btn-accent">Pay</div>
      </div>
      <div>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Invoices
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
                  <th className="p-3">Food image</th>
                  <th className="p-3">ITEM NAME</th>
                  <th className="p-3">Client email</th>
                  <th className="p-3">Due</th>
                  <th className="p-3 text-right">ACTION</th>
                  <th className="p-3">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <tr
                    key={cartItem._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                  >
                    <td className="p-3">
                      <img src={cartItem.image} alt="" className="w-20" />
                    </td>
                    <td className="p-3">
                      <p>{cartItem.name}</p>
                    </td>
                    <td className="p-3">
                      <p>{cartItem.email}</p>
                    </td>

                    <td className="p-3">${cartItem.price}</td>
                    <td className="p-3 text-right">
                      <div className="btn bg-[#D1A054]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={()=>{handleDelete(cartItem._id)}} className="btn bg-[#B91C1C]">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
