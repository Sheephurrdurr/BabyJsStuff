// SCSS
import './headsOrTails.scss';

const HeadsOrTails = () => {
    return (
        <>
            <article className="row">
                <div id="headsOrTailsDiv" className="col-4 container text-center">
                    <button className="btn btn-primary col-5">Flip Coin</button>
                    <span id="result"></span>

                </div>
            </article>
        </>
    );
}

export default HeadsOrTails;