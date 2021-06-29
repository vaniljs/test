import classes from './modal.module.scss'
import FormElem from "../../elements/formElem/formElem";

function Modal(props) {
    return <div className={props.modal ? classes.modalOverlay + ' ' + classes.active : classes.modalOverlay}>
        <div className={classes.form}>
            <a href="#" className={classes.close} onClick={props.closeModal}></a>
            <div className={classes.form}><FormElem/></div>
        </div>
    </div>
}

export default Modal