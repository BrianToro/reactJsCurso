import React, { useState, useEffect, Fragment } from "react";

//Componentes
import Search from "../components/search";
import Category from "../components/category";
import Carrousel from "../components/carrouser";
import CarrouselItem from "../components/carrouselItem";

//Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

//Css
import "../assets/styles/app.scss";

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Home;
