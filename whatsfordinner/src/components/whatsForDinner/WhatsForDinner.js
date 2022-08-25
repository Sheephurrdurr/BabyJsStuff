// SCSS
import './whatsForDinner.scss';

const Whatsfordinner = () => {
    
    const dinnerIndex = ["Pizza", "Rød Karry", "Grøn Karry", "Burger", "Borritos", "Pasta & Kødsovs", "Fried Rice & Chicken", "Knorr Lasagne", "Hjemmelavet Lasange", "Pøllemix", "Kyllemix"];

    var RandomItem = dinnerIndex[Math.floor(Math.random() * dinnerIndex.length)];

    const whatsForDinner = () => {
        document.querySelector('#resultTag').innerHTML = RandomItem;
    }
    
    // BAD, BAD, BAD!
    const resetResult = () => {
        window.location.reload();
    }
    
    return (
        <section className="row">
        <div>
            <div id="wFDDiv" className="col-4 container text-center"> 
                <button onClick={whatsForDinner} className="btn btn-primary col-5">Get Suggestion</button>
                <button onClick={resetResult} className="btn btn-primary col-5">Reset</button>
                <br/>
                <span className="text-light text-center col-12" id="resultTag"></span>
            </div>
        </div>
        </section>
    );
}

export default Whatsfordinner;