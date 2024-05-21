import Cover from "../Shared/Cover";
import MenuItemCard from "../Shared/MenuItemCard";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
           {title &&  <Cover
                img={img}
                title={title}
            >
            </Cover>}
            <div className="grid grid-cols-2 gap-4 mt-6 mb-6 justify-items-center">
                {
                    items.map(item => <MenuItemCard key={item._id} item={item}>

                    </MenuItemCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;