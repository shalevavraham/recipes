import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoadhing] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [favourItemsList, setFavourItemsList] = useState([])

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoadhing(false);
        setSearchParam("");
        navigate('/')
        console.log(data);
      }
    } catch (e) {
      console.log(e);
      setLoadhing(false);
      setSearchParam("");
    }
  };

  const handleAddToFavouritem = (getCurrentItem) => {
    console.log(getCurrentItem);

    let copyFavouriteList = [...favourItemsList]
    let index = copyFavouriteList.findIndex(item => item.id === getCurrentItem.id)

    if(index === -1){
      copyFavouriteList.push(getCurrentItem)
    }else{
      copyFavouriteList.splice(index)
    }
    setFavourItemsList(copyFavouriteList)
  }
  console.log(favourItemsList, 'favourItemsList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailData,
        setRecipeDetailData,
        handleAddToFavouritem,
        favourItemsList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
