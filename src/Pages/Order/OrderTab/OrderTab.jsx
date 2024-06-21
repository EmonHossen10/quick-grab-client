/* eslint-disable react/prop-types */
import CardShare from "../../Shared/CardShare";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {
                items.map(item=><CardShare key={item._id} item={item}></CardShare>)
            }
            </div>
    );
};

export default OrderTab;