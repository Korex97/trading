import { Stack } from "@mui/material";
import Title from "antd/lib/typography/Title";
import { BsCheckCircleFill } from "react-icons/bs"
import "./Packages.css";
import { packages } from "../../../info";

const Packages = () => {
  return (
    <>
        <div id="packages" className="packages">
            <div className='headings'>
                    <Stack className="heads" spacing={1} >
                        <Title level={2}>Our Mining Packages</Title>
                        <p className='head2' >Choose how you want to mine with us</p>
                    </Stack>
            </div>

            <div className="price_cards">

                {
                    packages.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <Stack spacing={2}>
                                    <div className="card_head">
                                        <h5>{item.name}</h5>
                                    </div>

                                    <h3 className="card_price">$ {item.price}</h3>
                                    <p className="duration">{item.duration}</p>

                                    <hr />
                                </Stack>

                                <Stack className="features" spacing={1}>
                                    {
                                        item.features.map((feature) => {
                                            return (
                                                <div key={feature}>
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
        </div>
    </>
  )
}

export default Packages