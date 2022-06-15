import "./modals.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessModal = props => {

    if (!props.showSuccess) {
        return null
    }

  return (
    <>
        <div id="fundSection" onClick={props.onClose} className="modal" tabIndex={"-1"} role="dialog" aria-hidden="true">
            <div className="modal-dialog-centered" role={"document"}>
                <div className="modal-content success" onClick={e => e.stopPropagation()}>

                    <div className="modal-body">
                        <AiOutlineCheckCircle className="icon" />

                        <div className="text">You have Successfully Funded your account with ${props.amount}</div>

                        <div className="closeModal">
                            <button onClick={props.onClose} className="btn btn-primary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuccessModal