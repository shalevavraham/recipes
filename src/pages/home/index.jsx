import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../component /recipe-item";

const Home = () => {
    const {loading, recipeList} = useContext(GlobalContext)

    if(loading){
        return <div>Loading... Please wait</div>
    }

    return(
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-1">
            {
                recipeList && recipeList.length > 0 ? 
                recipeList.map((item, index) => <RecipeItem key={index} item={item}/>)
                : <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show. Please search somthing</p>
                </div>
            }
        </div>
    )
}

export default Home;