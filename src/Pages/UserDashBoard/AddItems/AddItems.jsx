import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle heading={"---What's new?---"} subHeading={"ADD AN ITEM"} />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className=" gap-2" htmlFor="">
            Recipe name*
            <input
             
               {...register("nameRequired", { required: true })}
                type="text"
                className="input input-bordered input-secondary w-full "
                placeholder="Recipe Name"
                
              />
              {errors.nameRequired && <span className="text-red-700">This field is required</span>}
          </label>
          
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
            <label className="" htmlFor="">
              Category*
              <select
                className="select select-primary w-full "
              
                {...register("categoryRequired", { required: true })}
               
              >
               
                <option disabled selected>
                  Which category of food you want to select ?
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.categoryRequired && <span className="text-red-700">This field is required</span>}
            </label>
            <label className="" htmlFor="">
              Price*
              <input
             
               {...register("priceRequired", { required: true })}
                type="number"
                className="input input-bordered input-secondary w-full "
            
                
              />
                {errors.priceRequired && <span className="text-red-700">This field is required</span>}
            </label>
            </div>
       
         
          <label className="" htmlFor="">
            Recipe Details*
            <textarea
                
                {...register("detailsRequired", { required: true })}
              className="textarea textarea-bordered w-full h-48"
              placeholder=""
            ></textarea>
             {errors.detailsRequired && <span className="text-red-700">This field is required</span>}
          </label>

          <button type="submit" className="btn my-6 text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
