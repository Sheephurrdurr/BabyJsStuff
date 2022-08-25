// SCSS
import './dinnerWithHooks.scss';

// Hooks
import { useState, useEffect } from 'react';

const DinnerWithHooks = () => {

    const [food] = useState(["Pizza", "Rød Karry", "Grøn Karry", "Burger", "Borritos", "Pasta & Kødsovs"]);

    var RandomItem = food[Math.floor(Math.random() * food.length)];

    useEffect(() => {
        if (document.querySelector("#resultTag" !== "")) {
            document.querySelector("#resultTag").innerHTML = RandomItem;
        }
    }, []);

    //var RandomItem = dinnerIndex[Math.floor(Math.random() * dinnerIndex.length)];

    


    return (
        <>
        <article className="row">
             <div id="dinnerWithHooksDiv" className="col-4 text-center container">
                <button className="btn btn-primary col-6">What's For Dinner?</button>
                <p id="resultTag"></p>
            </div>
        </article>
        </>
    );
}

export default DinnerWithHooks;