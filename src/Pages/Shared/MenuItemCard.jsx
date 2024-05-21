

const MenuItemCard = ({ item }) => {
    const { image, price, recipe, name } = item
    return (
        <div className="flex space-x-4">
            <img className="w-28" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}----------------</h2>
                <p>{recipe}</p>
            </div>
            <h2 className="text-yellow-500">${price}</h2>
        </div>
    );
};

export default MenuItemCard;