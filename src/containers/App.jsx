import React, { useState, useEffect } from "react";

//Componentes
import Header from "../components/header";
import Search from "../components/search";
import Category from "../components/category";
import Carrousel from "../components/carrouser";
import CarrouselItem from "../components/carrouselItem";
import Footer from "../components/footer";

//Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

//Css
import "../assets/styles/app.scss";

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="app">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Category title="Mi lista">
          <Carrousel>
            {initialState.mylist.map(item => 
              <CarrouselItem key={item.id} {...item} />
            )
            }
          </Carrousel>
        </Category>
      )}

      <Category title="Tendencias">
        <Carrousel>
            {initialState.trends.map(item =>
                <CarrouselItem key={item.id} {...item} />
            )
            }

        </Carrousel>
      </Category>
      <Category title="Originales de platzi">
        <Carrousel>
        {initialState.originals.map(item => 
            <CarrouselItem key={item.id} {...item}/>
        )
        }
        </Carrousel>
      </Category>
      <Footer />
    </div>
  );
};

export default App;
