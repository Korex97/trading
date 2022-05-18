import { Stack } from "@mui/material";
import Title from "antd/lib/typography/Title";
import "./Customer.css";
import customerImage from "../../../assets/testimonial.jpg"

const Customer = () => {
  return (
    <>
        <div className="customer">
            <div className='headings'>
                    <Stack className="heads" spacing={1} >
                        <Title level={3}>What our Customer says!</Title>
                        <p className='head2' >Don't take our word for it, here's what some of our clients have to say about us</p>
                    </Stack>
            </div>

            <div className="customer_body">
                <div className="image">
                    <img src={customerImage} alt="customer" />
                </div>

                <div className="comments">
                    <div className="name">
                        <h3>Bimbo Kunle</h3>
                        <small>Developer</small>
                    </div>

                    <div className="comment">
                        <p>"I Love This Platform"</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Customer