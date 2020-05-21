import React, { useState, useEffect, Fragment } from "react";

//Componentes
import Search from "../components/search";
import Category from "../components/category";
import Carrousel from "../components/carrouser";
import CarrouselItem from "../components/carrouselItem";

//Hooks
import useInitialState from '../hooks/useInitialState';

//redux
import { connect } from 'react-redux';

//Css
import "../assets/styles/app.scss";

const Home = ({ mylist, trends, originals }) => {
  return (
    <Fragment>
      <Search isHome />
      {mylist.length > 0 && (
        <Category title="Mi lista">
          <Carrousel>
            {mylist.map(item => 
              <CarrouselItem key={item.id} {...item} islist={true} />
            )
            }
          </Carrousel>
        </Category>
      )}

      <Category title="Tendencias">
        <Carrousel>
            {trends.map(item =>
                <CarrouselItem key={item.id} {...item} />
            )
            }

        </Carrousel>
      </Category>
      <Category title="Originales de platzi">
        <Carrousel>
        {originals.map(item => 
            <CarrouselItem key={item.id} {...item}/>
        )
        }
        </Carrousel>
      </Category>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);