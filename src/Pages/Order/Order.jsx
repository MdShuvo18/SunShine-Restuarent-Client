import { useState } from "react";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OrderTabPanel from "../Shared/OrderTabPanel";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Order = ({ img, title }) => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
                <title>SunShine || Order Food</title>
            </Helmet>
            <Cover img='https://i.ibb.co/dGqn3BG/micheile-henderson-1-Sj-D5-ZEi-Us-A-unsplash.jpg' title="Order Now" ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabPanel items={salad}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={pizza}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={soup}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={dessert}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={drinks}></OrderTabPanel>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;