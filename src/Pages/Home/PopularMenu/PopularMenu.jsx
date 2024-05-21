import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu)
            }
            )
    }, [])
    return (
        <section >
            <Sectiontitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </Sectiontitle>

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6 justify-items-center">
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item}>

                    </MenuItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;