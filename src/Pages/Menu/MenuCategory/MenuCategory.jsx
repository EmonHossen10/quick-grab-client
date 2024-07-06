/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title }) => {
 
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-16  gap-10 py-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center">
          <Button text="Order Your Favorite Food"></Button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
