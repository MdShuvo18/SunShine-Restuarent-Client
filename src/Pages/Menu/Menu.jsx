import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import useMenu from "../../Hooks/useMenu";
import Sectiontitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";


const Menu = ({ img, title }) => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className="space-y-10">
            <Helmet>
                <title>SunShine || Menu</title>
            </Helmet>
            <Cover
                img="https://i.ibb.co/MVgQS7j/nathan-dumlao-wz-IYHh-RWwu-Q-unsplash.jpg"
                title="our menu"
            >
            </Cover>
            {/* toadys offer part */}
            <Sectiontitle subHeading="Don't miss" heading="TODAY'S OFFER"></Sectiontitle>
            <MenuCategory
                items={offered}>
            </MenuCategory>

            {/* desserts part */}
            <MenuCategory
                items={dessert}
                title="Dessert"
                img={'https://i.ibb.co/cwsSL0R/edward-franklin-Nb-Q-M3-Cdzg-unsplash.jpg'}>
            </MenuCategory>

            {/* pizza part */}
            <MenuCategory
                items={pizza}
                title="Pizza"
                img={'https://i.ibb.co/7p2HYKm/peter-bravo-de-los-rios-Oklp-Rh8-Sns-unsplash.jpg'}>
            </MenuCategory>

            {/* salad part */}
            <MenuCategory
                items={salad}
                title="Salad"
                img={'https://i.ibb.co/DztMG15/mgg-vitchakorn-g-JSq-KRZdrwo-unsplash.jpg'}>
            </MenuCategory>

            {/* soup part */}
            <MenuCategory
                items={soup}
                title="Soup"
                img={'https://i.ibb.co/DKTk2XG/karolina-kolodziejczak-x7h-Mz-Wx-Za78-unsplash.jpg'}>
            </MenuCategory>


        </div>
    );
};

export default Menu;