import "./Withdraw.css";
import show from "../../../modules/showSection";


const Withdraw = () => {
    const getDate = () => {
        const date = new Date();
        const fullDate = date.toUTCString().split("GMT");
        return fullDate
    }
  return (
    <>
        <section id="withdraw">
            <div className="user-acnt money-card">
                <div className="card-head">
                    <span>{getDate()}</span>
                </div>
                <div className="card-head balance">
                    <span>Available Balance: </span>
                    <span>$ 500</span>
                </div>
            </div>

            <p>Select Your Withdraw Type:</p>

            <div className="withraw-type">
                <div className="types types-active"
                    onClick={(e) => {
                            show.show("crypto-form", "form__active", "bank-form");
                            show.btnStyle("types", "types-active", "crypto-form");
                        }
                    }>
                    Withdraw To Your USDT wallet
                </div>

                <div className="types"
                    onClick={(e) => {
                            show.show("bank-form", "form__active", "crypto-form");
                            show.btnStyle("types", "types-active", "bank-form")
                        }
                    }>
                    Withdraw To Your Bank
                </div>

            </div>

            <div id="crypto-form" className="form__active">
                <form>
                    <div className="form-group">
                        <label htmlFor="usdtAddress">USDT Address</label>
                        <input  
                            onChange={(e) => e.target.value}
                            name="address"
                            type="text" className="form-control" 
                            id="usdtAddress" aria-describedby="usdtHelp"
                            placeholder="Enter Your Valid USDT Address"
                        />
                        <small id="usdtHelp" className="form-text text-muted">
                            Kindly Drop on TRC20 wallet Address</small>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary">Withdrawal</button>
                    </div>
                </form>

            </div>

            <div id="bank-form">
                <form action="">
                    <p>Feature Coming Sooon</p>
                </form>
            </div>

        </section>
    </>
  )
}

export default Withdraw