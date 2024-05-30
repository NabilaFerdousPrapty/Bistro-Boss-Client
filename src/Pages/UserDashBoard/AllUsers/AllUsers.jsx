import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaDeleteLeft, FaPerson } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  let disabledBtn = false;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        // headers:{
        //   authorization:`Bearer ${localStorage.getItem('access-token')} `
        // }
      });
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to make this user admin",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make admin",
      }).then((result) => {
        if (result.isConfirmed) {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: `${user.name} is now an admin`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Failed to make admin",
              icon: "error",
            });
          }
        }
      });
      refetch();
    });
  };
  return (
    <div>
      <h1>All Users</h1>
      <h2 className="text-3xl">Total Users: {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] rounded-t-2xl ">
            <tr>
              <th>Index</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="relative">
                  {user.role === "admin" ? (
                    <span className="bg-[#D1A054] text-white px-2 py-1 rounded-lg">
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn bg-[#D1A054] ${disabledBtn} `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.35 6.70997C20.3497 7.50015 20.0961 8.26943 19.6263 8.9048C19.1565 9.54017 18.4954 10.0081 17.74 10.24C17.913 9.6762 18.0006 9.08971 18 8.49998C18.0001 7.46122 17.73 6.44029 17.2163 5.53742C16.7026 4.63455 15.963 3.88078 15.07 3.35011C15.5651 3.12029 16.1042 3.00083 16.65 3C17.6325 3.00171 18.5741 3.39345 19.2679 4.08912C19.9617 4.78479 20.3509 5.72747 20.35 6.70997ZM19.6 11.3001C19.1799 11.1824 18.7303 11.2363 18.35 11.4501C17.9224 11.6871 17.4478 11.8271 16.96 11.8599C16.7581 12.1678 16.5234 12.4528 16.26 12.7101C17.2047 13.0209 18.0458 13.5855 18.6913 14.3421C19.3368 15.0987 19.7618 16.0182 19.92 17.0001H20.61C20.8316 17.0032 21.0499 16.9463 21.2418 16.8354C21.4337 16.7245 21.5921 16.5638 21.7 16.3702C21.8986 15.9978 22.0016 15.582 22 15.16V14.45C22 12.96 21.01 11.6699 19.6 11.3001ZM8.93002 3.35011C8.43494 3.12029 7.89582 3.00083 7.35 3C6.46401 3.00062 5.60761 3.31893 4.93631 3.89714C4.265 4.47536 3.8233 5.27513 3.69141 6.15125C3.55951 7.02737 3.74617 7.92175 4.21748 8.67198C4.6888 9.4222 5.41352 9.97855 6.26007 10.24C6.08706 9.67621 5.99941 9.08971 6 8.49998C5.99995 7.46122 6.27002 6.44029 6.78371 5.53742C7.29739 4.63455 8.03703 3.88078 8.93002 3.35011ZM7.74 12.71C7.47665 12.4527 7.24194 12.1677 7.03997 11.8598C6.55217 11.827 6.07761 11.6871 5.65003 11.45C5.26973 11.2362 4.8201 11.1823 4.40002 11.3C2.98997 11.6698 2.00002 12.9599 2.00002 14.45V15.1599C1.99841 15.5819 2.10149 15.9977 2.30002 16.3701C2.40683 16.5625 2.56351 16.7225 2.75357 16.8333C2.94363 16.9442 3.16005 17.0018 3.38007 17H4.08C4.23819 16.0181 4.66325 15.0986 5.30874 14.342C5.95423 13.5854 6.7953 13.0208 7.74 12.71ZM15.58 14.07C15.4066 14.0265 15.2288 14.003 15.05 14C14.7032 14.0007 14.3624 14.0903 14.06 14.26C13.4291 14.6077 12.7204 14.79 12 14.79C11.2796 14.79 10.5709 14.6077 9.93999 14.26C9.63761 14.0903 9.29681 14.0007 8.95003 14C8.77125 14.003 8.59339 14.0265 8.41997 14.07C7.57957 14.2979 6.83785 14.7968 6.30989 15.4892C5.78194 16.1817 5.49725 17.029 5.49999 17.8997V18.7698C5.50032 19.2796 5.62748 19.7814 5.87002 20.2298C6.12 20.7097 6.62002 20.9998 7.17999 20.9998H16.82C17.38 20.9998 17.88 20.7097 18.13 20.2298C18.3725 19.7814 18.4997 19.2796 18.5 18.7698V17.8999C18.5028 17.0291 18.2181 16.1818 17.6902 15.4893C17.1622 14.7968 16.4205 14.2979 15.58 14.07ZM16.5 8.49998C16.5 7.60997 16.2361 6.73994 15.7416 5.99992C15.2471 5.2599 14.5443 4.68312 13.7221 4.34253C12.8998 4.00193 11.995 3.91282 11.1221 4.08645C10.2492 4.26008 9.44736 4.68867 8.81802 5.318C8.18869 5.94734 7.7601 6.74916 7.58647 7.62208C7.41284 8.49499 7.50195 9.39979 7.84255 10.2221C8.18314 11.0443 8.75992 11.7471 9.49994 12.2416C10.24 12.7361 11.11 13 12 13C13.1935 13 14.3381 12.5259 15.182 11.682C16.0259 10.8381 16.5 9.69346 16.5 8.49998Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
