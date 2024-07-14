import "./BodyMiddle.css"
import Name from "../../Name/Name";

function BodyMiddle() {
    return (
        <>
        <div className="panelMiddle">
            <Name>Blok Drugi</Name>
            <div className="buttonsHolder">
            <button type="button">Zastąp</button>
            <button type="button">Doklej</button>
            </div>
        </div>
        </>
    )
}

export default BodyMiddle;