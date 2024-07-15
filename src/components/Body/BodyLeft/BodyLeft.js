import "./BodyLeft.css"
import Name from "../../Name/Name";

function BodyLeft() {

    return (
        <>
        <div className="test">
            <Name>Blok Pierwszy</Name>
            <div className="radio-group">
            <label>
                <input type="radio" name="pick" className="pick" value="10" id="pick"/>
                Opcja pierwsza
            </label>
            <label>
                <input type="radio" name="pick" className="pick" value="20"/>
                Opcja druga
            </label>
            <label>
                <input type="radio" name="pick" className="pick" value="30"/>
                Opcja losowa
            </label>
            </div>
        </div>
        </>
    )
}

export default BodyLeft;