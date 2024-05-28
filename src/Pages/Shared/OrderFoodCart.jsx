

const OrderFoodCart = ({item}) => {
    const { image, price, recipe, name } = item
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 bg-black text-white mr-4 mt-4 px-4">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCart;