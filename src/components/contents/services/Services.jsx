import React from 'react';
import Stack from "@mui/material/Stack"; 
import ShowChartIcon from "@mui/icons-material/ShowChartRounded";
import Title from 'antd/lib/typography/Title';
import PhonePic from "../../../assets/phone.png";

import "./Services.css";

const Services = () => {
  return (
        <>
            <div className='services'>
                <div className='headings'>
                    <Stack className="heads" spacing={1} >
                        <Title level={2}>Explore Our Services</Title>
                        <p className='head2' >It’s our mission to provide you with a delightful and a successful trading experience!</p>
                    </Stack>
                </div>

                <div className='service_section'>
                    <div className='section_1'>
                        <Stack spacing={2}>
                            <div className='details'>
                                <div className='details_icon'>
                                    <ShowChartIcon fontSize='large' color='primary' />
                                </div>

                                <div className='details_text'>
                                    <Title level={4}>Powerful Trading Platforms</Title>
                                    <p>klure Trade offers multiple platform options to cover the needs of each type of trader and investors .</p>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='details_icon'>
                                    <ShowChartIcon fontSize='large' color='primary' />
                                </div>

                                <div className='details_text'>
                                    <Title level={4}>Powerful Trading Platforms</Title>
                                    <p>klure Trade offers multiple platform options to cover the needs of each type of trader and investors .</p>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='details_icon'>
                                    <ShowChartIcon fontSize='large' color='primary' />
                                </div>

                                <div className='details_text'>
                                    <Title level={4}>Powerful Trading Platforms</Title>
                                    <p>klure Trade offers multiple platform options to cover the needs of each type of trader and investors .</p>
                                </div>
                            </div>
                        </Stack>

                    </div>

                    <div className='section_2'>
                        <Stack spacing={2}>
                            <div className='details'>
                                <div className='details_icon'>
                                    <ShowChartIcon fontSize='large' color='primary' />
                                </div>

                                <div className='details_text'>
                                    <Title level={4}>Powerful Trading Platforms</Title>
                                    <p>klure Trade offers multiple platform options to cover the needs of each type of trader and investors .</p>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='details_icon'>
                                    <ShowChartIcon fontSize='large' color='primary' />
                                </div>

                                <div className='details_text'>
                                    <Title level={4}>Powerful Trading Platforms</Title>
                                    <p>klure Trade offers multiple platform options to cover the needs of each type of trader and investors .</p>
                                </div>
                            </div>
                        </Stack>

                    </div>

                    <div className='section_3'>
                        <img src={PhonePic} alt="Phone Trading"/>
                    </div>
                </div>
            </div>
        </>  
    )
}

export default Services