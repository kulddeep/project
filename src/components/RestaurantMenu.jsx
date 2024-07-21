import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCardsArray = [];

  // Iterate through all cards and extract itemCards
  for (
    let i = 0;
    i < resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length;
    i++
  ) {
    const card =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card
        ?.card;
    if (card && card.itemCards) {
      itemCardsArray.push(...card.itemCards);
    }
  }

  //console.log(itemCardsArray);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch and action
    dispatch(addItem(item));
  };

  return (
    <div className="menu">
      <div className="res-info">
        <div className="res-info-detail">
          <h1>{name}</h1>
          <span className="rating">
            {avgRating}
            <i className="fa-solid fa-star"></i>
          </span>
          <span>{` • ${costForTwoMessage}`}</span>
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="menu-logo">
          <img src={CDN_URL + cloudinaryImageId} />
        </div>
      </div>

      <div className="res-menu">
        <div className="">
          <h3>Recommended Items{`: (${itemCardsArray.length})`}</h3>
        </div>
        {itemCardsArray.map((item) => (
          <div className="res-menu-items" key={item.card.info.id}>
            <div className="item-detail">
              <h3>{item.card.info.name}</h3>
              <p>
                {"₹"}
                {item.card.info.price / 100}
              </p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="item-image">
              <img
                alt="Image Not Found"
                src={CDN_URL + item.card.info.imageId}
              />
              <button className="add-item" onClick={() => handleAddItem(item)}>
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
