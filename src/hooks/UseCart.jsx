import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';
import useAuth from './UseAuth';

const UseCart = () => {
    const axiosSecure=UseAxiosSecure();
     const {user}=useAuth();
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
       queryFn:async()=>{
        const response=await axiosSecure.get(`/carts?email=${user.email}`);
        console.log(response.data);
        return response.data;
       }
    })
    return [refetch,cart];
};


export default UseCart;