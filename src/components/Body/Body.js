import "./Body.css"
import BodyLeft from "./BodyLeft/BodyLeft";
import BodyMiddle from "./BodyMiddle/BodyMiddle";
import BodyRight from "./BodyRight/BodyRight";


function Body() {
    return (
        <>
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
                <div className="block">
                    <BodyMiddle />
                </div>
                <div className="blockLeft">
                    <BodyRight />
                </div>
            </div>
        </>
    )
}

export default Body;