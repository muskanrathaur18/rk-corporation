import React from "react";
import Heroheader from '../Home/Heroheader';
import About from '../Home/About';
import Banner from '../Home/Banner';
import Categories from '../Home/Categories';
import Product from '../Home/Product';
import Promise from '../Home/Promise';
import Sellingproduct from '../Home/Sellingproduct';
import Chooseus from '../Home/Chooseus';
import Blog from '../Home/Blog';
import Section from '../Home/Section';
const Home = () => {
    return(
        <div>
            <Heroheader />
            <About />
            <Banner />
            <Categories />
            <Product />
            <Promise />
            <Sellingproduct />
            <Chooseus />
            <Blog />
            <Section />
        </div>
    );
};
export default Home;