import './bottomForm.css'
import FormElem from "../../elements/formElem/formElem";

function BottomForm() {
    return <div className="bottom-contacts">
        <div className="contacts-info">
            <h2>СВЯЖИТЕСЬ С НАМИ</h2>
            <div className="other-contacts-info">
                <h4 className="time">пн-пт 09:00 - 19:00</h4>
                <h3 className="adress">г.Москва, ул.Тихвинская, д.3, корп.1</h3>
                <h2 className="telephones">+7(495) 689-35-62</h2>
                <h4 className="mail-adress">DOR-msk@gmail.ru</h4>
            </div>
        </div>
        <div className="form-bottom"><FormElem/></div>
    </div>
}

export default BottomForm