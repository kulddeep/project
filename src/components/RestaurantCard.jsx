import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,avgRating,cuisines,locality} = resData?.info;
    return (
        <div className="res-cards">
            <div className="res-logo" alt="res-logo">
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h3><span className="rating">{`${avgRating} `}<i className="fa-solid fa-star"></i></span>{` • ${resData.info.sla.slaString}`}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4><span><i className="fa-solid fa-location-dot"></i></span>{locality}</h4>

        </div>
    )
};

export default RestaurantCard;