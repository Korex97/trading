import "./Dashboard.css";
import { BsArrowRight } from "react-icons/bs";

const Dashboard = () => {
    const lotSize = 0.05;
    const action = {
        1: "buy",
        2: "sell"
    }
    const users = [
        {
            id: 1,
            user: "Bimbo Akin",
            status: "active"
        },
        {
            id: 2,
            user: "Bimbo Akin",
            status: "inactive"
        },
        {
            id: 3,
            user: "Bimbo Akin",
            status: "active"
        },
        {
            id: 4,
            user: "Ayomikun Adegboye",
            status: "inactive"
        },
        {
            id: 5,
            user: "Olaide Resman",
            status: "inactive"
        }
    ]
    const value = action[2]; 
    const getDate = () => {
        const date = new Date();
        const fullDate = date.toUTCString().split("GMT");
        return fullDate
    }
  return (
    <>
        <section className='dash-section'>
            <div className="cards-section">
                <div className="money-card">
                    <div className="card-head">
                        <span>{getDate()}</span>
                        <button className="btn">Fund Your Wallet</button>
                    </div>
                    <div className="card-head balance">
                        <span>Available Balance: </span>
                        <span>$ 500</span>
                    </div>
                </div>

                <div className="money-card package">
                    <div className="name">
                        <div>Plan: {"Gold Package"}</div>
                        <div className="btn">Duration: {"30 Days Plan"}</div>
                    </div>

                    <div className="name results">
                        <div>
                            <span>Expected ROI:</span>
                            <span>$500</span>
                        </div>
                        <div>
                            <span>Amount Invested:</span>
                            <span>$1000</span>
                        </div>
                    </div>
                </div>

                <div className="money-card trades">
                    <h4>Today's Trading Results</h4>
                    <div className="trade">
                        <h4>Currency pairs</h4>
                        <h4>% Profit</h4>
                    </div>

                    <div className="trade">
                        <div className="currency">
                            <span className="action">
                                BTC/USDT,{
                                    value === "buy" ? (
                                        <span className="action-buy">{value} at {lotSize}</span>
                                    ):(
                                        <span className="action-sell">{value} at {lotSize}</span>
                                    )
                                } 
                            </span>
                            <span className="position">
                                1.1250 
                                <BsArrowRight className="arrow" />
                                1.239
                            </span>
                        </div>

                        <div className="profit">
                            10%
                        </div>

                    </div>

                    <div className="trade">
                        <div className="currency">
                            <span className="action">
                                BTC/USDT,{
                                    value === "buy" ? (
                                        <span className="action-buy">{value} at {lotSize}</span>
                                    ):(
                                        <span className="action-sell">{value} at {lotSize}</span>
                                    )
                                } 
                            </span>
                            <span className="position">
                                1.1250 
                                <BsArrowRight className="arrow" />
                                1.239
                            </span>
                        </div>

                        <div className="profit">
                            10%
                        </div>

                    </div>

                    <div className="trade">
                        <div className="currency">
                            <span className="action">
                                BTC/USDT,{
                                    value === "buy" ? (
                                        <span className="action-buy">Buy at {lotSize}</span>
                                    ):(
                                        <span className="action-sell">Sell at {lotSize}</span>
                                    )
                                } 
                            </span>
                            <span className="position">
                                1.1250 
                                <BsArrowRight className="arrow" />
                                1.239
                            </span>
                        </div>

                        <div className="profit">
                            10%
                        </div>

                    </div>
                </div>

                <div className="referral">
                    <div className="money-card trades">
                        <h4>Your Downlines</h4>
                        {
                            users.map((i) => {
                                return (
                                    <div key={i.id} className="user-list">{
                                        i.status === "active" ? (
                                            <div className="active"></div>
                                        ): (
                                            <div className="inactive"></div>
                                        )
                                    }
                                        <div className="user">
                                            <span>{i.user}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Dashboard