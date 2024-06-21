import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-16  gap-10 py-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
