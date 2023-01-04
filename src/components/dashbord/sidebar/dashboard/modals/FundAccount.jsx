import Error from "../../../../error/Error";
import "./modals.css";
import "../../../../login/Login.css";

const FundAccount = props => {

    if (!props.show) {
        return null
    }

  return (
    <>
        <div id="fundSection" onClick={props.onClose} className="modal" tabIndex={"-1"} role="dialog" aria-hidden="true">
            <div className="modal-dialog-centered" role={"document"}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h5 className='modal-title'>Fund Your Account</h5>

                        <button onClick={props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                            

                        <form onSubmit={props.submitFunding}>

                            {
                                (props.error !== "")? (
                                    <Error error= {props.error} />
                                ) : (<></>)
                                    
                            }
                            
                            <div className="form-group">
                                <label htmlFor="funds">Enter Amount in $:</label>
                                <input type="number"
                                    onChange={props.inputChange}
                                    className='form-control'
                                    placeholder='Enter Desired Amount' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="funds">Send to this USDT wallet</label>
                                <input disabled type="text"
                                    value={"TSgff1Ychd59SXGo5B99xVnxeeqxzhTTEz"}
                                    className='form-control'
                                    placeholder='Enter Desired Amount' />
                                <small>Above USDT addresss is a TRC20 address</small>
                            </div>
                            
                            <div className="form-group">
                                <p>You can also scan QR code to send</p>
                                <img className="form-image" src="https://i.ibb.co/dWGnZDv/Photo-from-Resman.jpg" alt="QR code" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Fund Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FundAccount