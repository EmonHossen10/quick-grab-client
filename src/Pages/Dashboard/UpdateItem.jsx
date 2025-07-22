import { useLoaderData } from "react-router-dom";
import DashboardTitle from "../../Components/DashboardTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // now send the data to the server
      const menuItem = {
        name: data.name,
        category: data.Category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        toast.success(` ${data.name} Successfully Updated to the menu`);
      } else {
        toast.error("Failed to update item");
      }
      //   reset();
    }
  };
  return (
    <>
      <DashboardTitle
        subHeading={"what's up"}
        heading={"Update an item"}
      ></DashboardTitle>

      <form className="bg-[#E8E8E8] p-12" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend ">Recipe Name*</legend>
          <input
            {...register("name", { required: true })}
            type="text"
            defaultValue={name}
            className="input w-full my-5"
            placeholder="Recipe Name"
          />
        </fieldset>

        <div className="flex  gap-6">
          {/* category selection */}
          <fieldset className="fieldset w-1/2 px-2">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue={category}
              {...register("Category", { required: true })}
              className="select my-3 w-full"
            >
              <option disabled={true} value="default">
                Select a Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soups">Soups</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </fieldset>

          {/* price selection */}
          <fieldset className="fieldset w-1/2 px-2">
            <legend className="fieldset-legend">Price*</legend>
            <input
              {...register("price", { required: true })}
              type="number"
              defaultValue={price}
              className="input my-3 w-full"
              placeholder="Price"
            />
          </fieldset>
        </div>
        {/* recipe details */}
        <fieldset className="fieldset my-6">
          <legend className="fieldset-legend">Recipe Details*</legend>
          <textarea
            {...register("recipe", { required: true })}
            defaultValue={recipe}
            className="textarea my-3 h-40 w-full"
            placeholder="Recipe Details"
          ></textarea>
        </fieldset>
        <div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input mb-3"
          />
        </div>

        <div className="flex mt-8 justify-center">
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white hover:from-[#76531e] hover:to-[#cb9236] transition-all rounded-none duration-300">
            Update Recipe Details
          </button>
        </div>
        <Toaster></Toaster>
      </form>
    </>
  );
};

export default UpdateItem;
