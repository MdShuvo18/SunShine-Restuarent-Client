
import Sectiontitle from "../../../Components/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section >
            <Sectiontitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </Sectiontitle>

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6 justify-items-center">
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item}>

                    </MenuItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;