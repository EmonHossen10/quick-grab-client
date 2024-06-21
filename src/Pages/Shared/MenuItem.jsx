const MenuItem = ({ item }) => {
  // console.log(Object.keys(item).join(","))
  const { _id, name, recipe, image, category, price } = item;
  return (
    <div className="flex items-center space-x-4 ">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={image} />
        </div>
      </div>
      <div>
        <h3 className="uppercase font-bold">{name}----</h3>
        <p className="text-xs lg:text-base">{recipe}</p>
      </div>
      <p className="text-basic font-bold">${price}</p>
    </div>
  );
};

export default MenuItem;
