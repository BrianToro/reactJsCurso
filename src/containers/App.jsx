import React from 'react';

//Componentes
import Header from '../components/header'
import Search from '../components/search'
import Category from '../components/category';
import Carrousel from '../components/carrouser';
import CarrouselItem  from '../components/carrouselItem';
import Footer from '../components/footer';

//Css
import '../assets/styles/app.scss'

const App = () => (
    <div className="app">
        <Header/>
        <Search/>
        <Category title="Mi lista">
            <Carrousel>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
            </Carrousel> 
        </Category>
        <Category title="Tendencias">
            <Carrousel>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
            </Carrousel> 
        </Category>
        <Category title="Originales de platzi">
            <Carrousel>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
            </Carrousel> 
        </Category>
        <Footer/>
    </div>
);

export default App;