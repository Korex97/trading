import { Stack } from "@mui/material";
import Title from "antd/lib/typography/Title";
import "./Coins.css";
import { FaBitcoin, FaEthereum} from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
const Coins = () => {
  return (
    <>
        <div className="coin_section">
            <div className="headings">
                <Stack className="heads" spacing={1} >
                    <Title style={{color: "#0091ea"}} level={2}>Cryptocurrency</Title>
                    <p className='head2 paragrph' >Trade and mining Top Cryptocurrency</p>
                </Stack>
            </div>

            <div className="coins">
                <div className="card">
                    <div className="card_top">
                        <FaBitcoin className="icon btc" />
                        <div className="coin_name">
                            <h3>Bitcoin</h3>
                            <small>BTC / USD</small>
                        </div>
                    </div>

                    <div className="price">
                        <h3>$41,793</h3>
                        <small>(2.45%)</small>
                    </div>

                    <div className="market_details">
                        <div className="info">
                            <p>Market Cap Rank</p>
                            <p>Market Cap</p>
                            <p>24H Volume</p>
                            <p>24H High/Low</p>
                        </div>

                        <div className="values">
                            <p>#1</p>
                            <p>$794,145,422,189</p>
                            <p>$23,198,083,505</p>
                            <p>$41,887/$40,764</p>
                        </div>
                    </div>
                
                </div>  

                <div className="card">
                    <div className="card_top">
                        <FaEthereum className="icon eth" />
                        <div className="coin_name">
                            <h3>Ethereum</h3>
                            <small>ETH / USD</small>
                        </div>
                    </div>

                    <div className="price">
                        <h3>$41,793</h3>
                        <small>(2.45%)</small>
                    </div>

                    <div className="market_details">
                        <div className="info">
                            <p>Market Cap Rank</p>
                            <p>Market Cap</p>
                            <p>24H Volume</p>
                            <p>24H High/Low</p>
                        </div>

                        <div className="values">
                            <p>#1</p>
                            <p>$794,145,422,189</p>
                            <p>$23,198,083,505</p>
                            <p>$41,887/$40,764</p>
                        </div>
                    </div>
                </div> 

                <div className="card">

                    <div className="card_top">
                        <SiLitecoin className="icon ltc" />
                        <div className="coin_name">
                            <h3>Litecoin</h3>
                            <small>BTC / USD</small>
                        </div>
                    </div>

                    <div className="price">
                        <h3>$41,793</h3>
                        <small>(2.45%)</small>
                    </div>

                    <div className="market_details">
                        <div className="info">
                            <p>Market Cap Rank</p>
                            <p>Market Cap</p>
                            <p>24H Volume</p>
                            <p>24H High/Low</p>
                        </div>

                        <div className="values">
                            <p>#1</p>
                            <p>$794,145,422,189</p>
                            <p>$23,198,083,505</p>
                            <p>$41,887/$40,764</p>
                        </div>
                    </div>
                
                </div> 
            </div>
        </div>
    </>
  )
}

export default Coins;