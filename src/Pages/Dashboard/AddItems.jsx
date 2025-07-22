import { FaUtensils } from "react-icons/fa";
import DashboardTitle from "../../Components/DashboardTitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
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
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        toast.success(`Successfully added ${data.name}`);
      } else {
        toast.error("Failed to add item");
      }
      reset();
    }
  };
  return (
    <div className="pl-10 pr-10">
      <DashboardTitle
        heading={"Add Items"}
        subHeading={"Add new items to the inventory"}
      ></DashboardTitle>
      {/* form coming here */}

      <form className="bg-[#E8E8E8] p-12" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend ">Recipe Name*</legend>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input w-full my-5"
            placeholder="Recipe Name"
          />
        </fieldset>

        <div className="flex  gap-6">
          {/* category selection */}
          <fieldset className="fieldset w-1/2 px-2">
            <legend className="fieldset-legend">Category</legend>
            <select
              defaultValue="default"
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

        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white hover:from-[#76531e] hover:to-[#cb9236] transition-all rounded-none duration-300">
          Add Item <FaUtensils className="ml-4" />
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddItems;
