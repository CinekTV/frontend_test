import "./BodyLeft.css"
import Name from "../../Name/Name";

function BodyLeft() {
    return (
        <>
        <div className="test">
            <Name>Blok Pierwszy</Name>
            <div className="radio-group">
            <label for="first">
                <input type="radio" name="blockOneOption" value="1"/>
                Opcja pierwsza
            </label>
            <label for="second">
                <input type="radio" name="blockOneOption" value="2"/>
                Opcja druga
            </label>
            <label for="third">
                <input type="radio" name="blockOneOption" value="3"/>
                Opcja losowa
            </label>
            </div>
        </div>
        </>
    )
}

export default BodyLeft;