import "./Body.css"
import BodyLeft from "./BodyLeft/BodyLeft";
import BodyMiddle from "./BodyMiddle/BodyMiddle";
import BodyRight from "./BodyRight/BodyRight";


function Body() {
    return (
        <>
        <div className="container">
        <div className="bodyHeader">
                <h1>
                    Nagłówek H1
                </h1>
                ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
            </div>
            <div className="body">
                <div className="block">
                    <BodyLeft />
                </div>
                <div className="blockMiddle">
                    <BodyMiddle />
                </div>
                <div className="blockRight">
                    <BodyRight />
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;