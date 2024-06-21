/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from "../../Components/Button";

const CardShare = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <>
<div className="card bg-base-100 shadow-xl flex flex-col h-full">
  <figure className="relative h-48">
    <img className=" object-cover hover:scale-125 transition-all ease-in duration-200 w-full h-full" src={image} alt="Shoes" />
  </figure>
  <p className="bg-black text-white font-bold w-3/12 text-center py-1 absolute right-4 top-4">${price}</p>
  <div className="card-body flex flex-col flex-grow">
    <div className="flex flex-col justify-between   flex-grow">
      <div>
        <h2 className="card-title mb-3">{name}</h2>
        <p className="text">{recipe}</p>
      </div>
      <div className="card-actions mt-2">
        <Button text={"Add To Cart"}></Button>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default CardShare;
