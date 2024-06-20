const CardShare = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  return (
    <>
      <div className="   bg-base-100 shadow-xl">
        <img className="w-full" src={image} alt="Shoes" />

        <div className="card-body text-center">
          <h2 className="  font-bold text-2xl  "> {name}</h2>
          <p> {recipe} </p>
          <div className="card-actions justify-center ">
            <button className="btn btn-outline  btn-warning ">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShare;
