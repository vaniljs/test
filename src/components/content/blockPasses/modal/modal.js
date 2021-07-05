import classes from './modal.module.scss'
import CheckThePass from "./checkThePass/checkThePass";

function Modal(props) {
    return props.isCheckThePass ?
        <div className={props.modal ? classes.modalOverlay + ' ' + classes.active : classes.modalOverlay}
             onClick={props.closeModal}>
            <CheckThePass/>
        </div> : null
}

export default Modal