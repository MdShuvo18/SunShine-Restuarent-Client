import OrderFoodCart from "./OrderFoodCart";


const OrderTabPanel = ({ items }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                items.map(item => <OrderFoodCart
                    key={item._id}
                    item={item}
                ></OrderFoodCart>)
            }
        </div>
    );
};

export default OrderTabPanel;