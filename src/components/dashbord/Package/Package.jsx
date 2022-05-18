import "./package.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Stack } from "@mui/material";

const Package = () => {
  return (
    <>
        <section id="package">
            <div className="money-card package">
                <h4>Your Current Package:</h4>
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

            <h4>Our Available Packages:</h4>
            <div className="packages">
                <div className="money-card">
                    <Stack spacing={2}>
                        <div className="card_head">
                            <h3>VIP1</h3>
                        </div>

                        <h3 className="card_price">$ 30</h3>
                        <p className="duration">1 Days</p>

                        <hr />
                    </Stack>

                    <Stack className="features" spacing={1}>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                    </Stack>
                    <button className="card_btn">Buy now</button>
                </div>

                <div className="money-card">
                    <Stack spacing={2}>
                        <div className="card_head">
                            <h3>VIP1</h3>
                        </div>

                        <h3 className="card_price">$ 30</h3>
                        <p className="duration">1 Days</p>

                        <hr />
                    </Stack>

                    <Stack className="features" spacing={1}>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                    </Stack>
                    <button className="card_btn">Buy now</button>
                </div>

                <div className="money-card">
                    <Stack spacing={2}>
                        <div className="card_head">
                            <h3>VIP1</h3>
                        </div>

                        <h3 className="card_price">$ 30</h3>
                        <p className="duration">1 Days</p>

                        <hr />
                    </Stack>

                    <Stack className="features" spacing={1}>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                        <div>
                            <BsCheckCircleFill />
                            <span>Min. Possible deposit: $30</span>
                        </div>
                    </Stack>
                    <button className="card_btn">Buy now</button>
                </div>


            </div>

        </section>
    </>
  )
}

export default Package