import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/carrouselItem.scss";
import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";

const CarrouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, islist } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id,
            cover,
            title,
            year,
            contentRating,
            duration,
        });
    };
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            className="carousel-item__details--img"
                            src={play}
                            alt="Play Icon"
                        />
                    </Link>
                    
                    {islist ? (
                        <img
                            className="carousel-item__details--img"
                            src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png"
                            alt="remover"
                            onClick={() => handleDeleteFavorite(id)}
                        />
                    ) : (
                        <img
                            className="carousel-item__details--img"
                            src={plus}
                            alt="Plus Icon"
                            onClick={handleSetFavorite}
                        />
                    )}
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    );
};

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarrouselItem);
