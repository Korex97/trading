import  Stack  from '@mui/material/Stack';
import React from 'react'
import Title from 'antd/lib/typography/Title';
import Button from "@mui/material/Button";
import "./HeadSection.css"
import ForexImage from "../../../assets/b9158Babout.jpg";
import { useNavigate } from 'react-router-dom';

const HeadSection = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='head_section'>
            <div className='head_text'>
                <Stack spacing={3}>
                    <div className='paper' >
                        <p>Trade Invest stock, and Bond</p>
                    </div>
                    <Title className='title' level={1}>The Better Way to Trade & Mining</Title>
                    <div className='paper_text' >
                        <p>Klure Trade helps over 2 million customers achieve their financial goals by helping them trade and invest with ease</p>
                    </div>

                    <div className='btn'>
                        <Button onClick = {(e) => navigate("/signup")} variant="contained">Create an Account</Button>
                    </div>
                </Stack>
            </div>
            <div className='head_image'>
                <img src={ForexImage} alt={"Forex"} />
            </div>
        </div>
    </>
  )
}

export default HeadSection