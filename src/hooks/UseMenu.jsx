import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosCommon from "./UseAxiosCommon";


const UseMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    const axiosCommon=UseAxiosCommon();
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //            setMenu(data)
    //             setLoading(false)
    //         })
    //         .catch(err => console.log(err))

    // }
    // , []);
    const {data:menu=[],isPending:loading,refetch}=useQuery({
        queryKey: "menu",
        queryFn: async () => {
            const { data } = await axiosCommon.get("/menu");
            return data;
           
        },
        
    })
    return [menu,loading,refetch]
};

export default UseMenu;