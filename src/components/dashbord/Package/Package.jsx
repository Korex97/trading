import "./package.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Stack } from "@mui/material";
import { packages } from "../../../info";
import { AiOutlineWarning } from "react-icons/ai";

const Package = () => {
  return (
    <>
        <section id="package">
            {/* <div className="money-card package">
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
            </div> */}

            <div className="money-card package no-package">
                <div className="icon_container">
                    <AiOutlineWarning className="icon" />
                </div>
                <span>You do not have a current Package</span>

            </div>

            <h4>Our Available Packages:</h4>
            <div className="packages">

                {
                    packages.map((item) => {
                        return(
                            <div key={item.id} className="money-card">
                                <Stack spacing={2}>
                                    <div className="card_head">
                                        <h5>{item.name}</h5>
                                    </div>

                                    <h3 className="card_price">$ {item.price}</h3>
                                    <p className="duration">{item.duration}</p>

                                    <hr />
                                </Stack>

                                <Stack className="features" spacing={0}>
                                    {
                                        item.features.map((feature) => {
                                            return (
                                                <div key= {feature}>
                                                    <BsCheckCircleFill />
                                                    <span>{feature}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </Stack>
                                <button className="card_btn">Buy now</button>
                            </div>
                        )
                        
                    })
                }


            </div>

        </section>
    </>
  )
}

export default Package