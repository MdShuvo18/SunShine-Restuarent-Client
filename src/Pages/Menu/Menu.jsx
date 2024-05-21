import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = ({img,title}) => {
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
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;