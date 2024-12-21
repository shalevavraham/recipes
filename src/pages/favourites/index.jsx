import React from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../component /recipe-item";
import { useContext } from "react";

const Favourites = () => {
  const { favourItemsList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-1">
      {favourItemsList && favourItemsList.length > 0 ? (
        favourItemsList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added to favourites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
