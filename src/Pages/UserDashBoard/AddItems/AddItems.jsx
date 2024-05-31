import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosCommon from "../../../hooks/UseAxiosCommon";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosCommon=UseAxiosCommon();
    const axiosSecure=UseAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) =>
    {console.log(data);
        const imageFile={image:data.image[0]}
        const response=await axiosCommon.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(response.data.success){
            const menuItem={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:response.data.data.display_url
            }
          const menuResponse=await  axiosSecure.post('/menu',menuItem);
          console.log(menuResponse.data);
          if(menuResponse.data.insertedId){
             Swal.fire({
                icon: 'success',
                title: 'Your new menu has been added',
                showConfirmButton: false,
                timer: 1500
              })
          }
        }
        console.log(response.data);

    };
  return (
    <div>
      <SectionTitle heading={"---What's new?---"} subHeading={"ADD AN ITEM"} />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className=" gap-2" htmlFor="">
            Recipe name*
            <input
             
               {...register("name", { required: true })}
                type="text"
                className="input input-bordered input-secondary w-full "
                placeholder="Recipe Name"
                
              />
              {errors.name && <span className="text-red-700">This field is required</span>}
          </label>
          
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
            <label className="" htmlFor="">
              Category*
              <select defaultValue='default'
                className="select select-primary w-full "
              
                {...register("category", { required: true })}
               
              >
               
                <option disabled value='default'>
                  Which category of food you want to select ?
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && <span className="text-red-700">This field is required</span>}
            </label>
            <label className="" htmlFor="">
              Price*
              <input
             
               {...register("price", { required: true })}
                type="number"
                className="input input-bordered input-secondary w-full "
            
                
              />
                {errors.price && <span className="text-red-700">This field is required</span>}
            </label>
            </div>
       
         
          <label className="" htmlFor="">
            Recipe Details*
            <textarea
                
                {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full h-48"
              placeholder=""
            ></textarea>
             {errors.recipe && <span className="text-red-700">This field is required</span>}
          </label>
          <div>
          <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
          {errors.image && <span className="text-red-700">This field is required</span>}
          </div>
          <button type="submit" className="btn my-6 text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
