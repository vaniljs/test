import './table.scss'
import ButtonForOrderingInCardPass from "../elements/buttonForOrderingInCardPass/buttonForOrderingInCardPass";

function Table(props) {

    const green = <div className="table-cell">
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                fill="limegreen" fill-rule="evenodd"/>
        </svg>
    </div>

    const blue = <div className="table-cell">
        <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                fill="limegreen" fill-rule="evenodd"/>
        </svg>
    </div>

    return <div className="table" id='Документы'>
        <div className="table-cell"></div>
        <div className="table-cell plattform">
            <h3>ФИЗ ЛИЦА И ИП</h3>
            <div onClick={props.openModal}><ButtonForOrderingInCardPass/></div>
        </div>
        <div className="table-cell enterprise">
            <h3>ЮР. ЛИЦА</h3>
            <div onClick={props.openModal}><ButtonForOrderingInCardPass/></div>
        </div>
        <div className="table-cell cell-feature">ПТС (Паспорт транспортного средства) — 2 стороны</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">СТС (Свидетельство транспортного средства) — 2 стороны</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">ВУ (Водительское удостоверение) — 2 стороны</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Паспорт водителя (только граждане РФ)</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Паспорт собственника ТС (2-3 стр., актуальная регистрация)</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Диагностическая карта (технический осмотр — с актуальным сроком
            действия (не позднее 2 месяцев на дату подачи документов на регистрацию пропуска) — 2 стороны
        </div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Договор Лизинга (если собственник Лизингополучатель)</div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Договор Аренды (в случае, если собственник не является лицом от
            которого подаем заявление в департамент
        </div>
        {green}
        {blue}
        <div className="table-cell cell-feature">Договор на грузоперевозку, либо Товарно-Транспортную накладную</div>
        <div className="table-cell"></div>
        {blue}
    </div>
}

export default Table