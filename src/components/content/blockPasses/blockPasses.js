import classes from './blockPasses.module.scss'
import imgMKAD from './../../../store/images/mkad.jpg'
import imgTTK from './../../../store/images/ttk.jpg'
import imgSK from './../../../store/images/sk.jpg'
import Modal from "./modal/modal";
import ButtonForOrderingInCardPass from "../elements/buttonForOrderingInCardPass/buttonForOrderingInCardPass";

function BlockPasses(props) {

    const arrayText = [{
        img: imgMKAD,
        road: 'МКАД',
        text: 'Пропуск МКАД разрешает передвижение транспортных средств по МКАД, до ТТК, без права въезда и движения по ТТК, круглосуточно'
    },
        {
            img: imgTTK,
            road: 'ТТК',
            text: 'Пропуск дает право движения по МКАД и Третьему транспортному кольцу до Садового кольца, без права въезда и движения по СК круглосуточно'
        },
        {
            img: imgSK,
            road: 'СК',
            text: 'Пропуск разрешает грузовому автотранспорту передвигаться по всей территории Москвы круглосуточно'
        }]

    const passes = arrayText.map(elem => {
        return <article className={classes.gridItem}>
            <div className={classes.image}>
                <img src={elem.img}/>
            </div>
            <div className={classes.info}>
                <h2>{elem.road}</h2>
                <div className={classes.infoText}>
                    <p>{elem.text}</p>
                </div>
                <div onClick={props.openModal}><ButtonForOrderingInCardPass/></div>
            </div>
        </article>
    })

    return <div className={classes.blockPasses} id='Виды пропусков'>
        <Modal modal={props.modal} closeModal={props.closeModal}/>
        <p className={classes.title}>Виды пропусков</p>
        <section className={classes.grid}>
            {passes}
        </section>
    </div>
}

export default BlockPasses