import Error from '../../../../error/Error';
import Loading from '../../../../loading/Loading';
import "./modals.css";

const TransactionID = (props) => {
    if (!props.show){
        return null
    }
  return (
    <>
        <div id="fundSection" className="modal" tabIndex={"-1"} role="dialog" aria-hidden="true">
            <div className="modal-dialog-centered" role={"document"}>
                    {
                        (props.showLoading)? (
                            <Loading show={props.showLoading} />
                        ): (
                            <div className='modal-content'>
                                <div className="modal-header">
                                    <h5 className='modal-title'>Fund Your Account</h5>

                                    <button onClick={props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">        
                                    <form onSubmit={props.submitID}>

                                        {
                                            (props.error !== "")? (
                                                <Error error= {props.error} />
                                            ) : (<></>)
                                                
                                        }


                                        <div className="form-group">
                                            <label htmlFor="funds">Enter Amount:</label>
                                            <input disabled type="number"
                                                value={props.amount}
                                                className='form-control'
                                                placeholder='Amount Sent' 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="funds">Enter Transaction ID</label>
                                            <input type="text"
                                                onChange={props.onChange}
                                                className='form-control'
                                                placeholder='Enter Transaction ID' 
                                            />
                                        </div>


                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Confirm Transaction
                                            </button>
                                        </div>
                                    </form>                                    
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    </>
  )
}

export default TransactionID;