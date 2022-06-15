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
                                    value={"0x9cc8a65daf6b033ee22581cd4cae1d34fbdb5ac6b"}
                                    className='form-control'
                                    placeholder='Enter Desired Amount' />
                                <small>above USDT addresss is a BEP20 address</small>
                            </div>
                            
                            <div className="form-group">
                                <p>You can also scan QR code to send</p>
                                <img className="form-image" src="https://cdn.bitkeep.vip/u_b_8bb403d0-a049-11ec-a3eb-f758fa002ae8.png" alt="QR code" />
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