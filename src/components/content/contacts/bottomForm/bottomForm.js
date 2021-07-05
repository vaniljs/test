import './bottomForm.css'
import FormElem from "../../elements/formElem/formElem";
import classes from "../../../header/title/title.module.scss";

function BottomForm() {
    return <div className="bottom-contacts">
        <div className="contacts-info">
            <h2>СВЯЖИТЕСЬ С НАМИ</h2>
            <div className="other-contacts-info">
                <h4 className="time">пн-пт 09:00 - 19:00</h4>
                <h3 className="adress">г.Москва, ул.Тихвинская, д.3, корп.1</h3>
                <a href="tel:74952086494" alink="#aaa" className='numberBottomForm'><span>+7 495 208 64 94</span></a>
                <h4 className="mail-adress"><a href="mailto:info@helpcargo.ru"><span>info@help-cargo.ru</span></a></h4>
            </div>
        </div>
        <div className="form-bottom"><FormElem/></div>
    </div>
}

export default BottomForm