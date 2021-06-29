import './formElem.css'
import ButtonForOrdering from "../buttonForOrdering/buttonForOrdering";

function FormElem() {
    return <div>
        <div className="form-at">
            <div className="validate-input-at w-50" data-validate="Обязательное поле">
                <input className="input-at" type="text" name="name-at" placeholder="Ваше имя"/>
                <span className="focus-input-at"></span>
            </div>
            <div className="validate-input-at w-50" data-validate="Обязательное поле">
                <input className="input-at" type="text" name="email-at" placeholder="Ваш телефон или email"/>
                <span className="focus-input-at"></span>
            </div>
            <div className="validate-input-at" data-validate="Обязательное поле">
                <textarea className="input-at" name="message-at" placeholder="Ваше сообщение"></textarea>
                <span className="focus-input-at"></span>
            </div>
            <input checked="checked" className="input-at" id="checkbox-at" type="checkbox" name="checkbox-at"
                   onChange="document.getElementById('submit-at').disabled = !this.checked;"/>
            <label htmlFor="checkbox-at">
                Настоящим подтверждаю, что я ознакомлен и согласен с <a href="#rules">пользовательским соглашением</a>
            </label>
            <input type="hidden" name="subject-at" value="Тема формы"/>
            <ButtonForOrdering/>
        </div>
        <div className="result-at"></div>
    </div>
}

export default FormElem