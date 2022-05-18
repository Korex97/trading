import { Stack } from "@mui/material";
import "./Account.css";

const Account = () => {
  return (
    <>
        <div className="accounts">
            <div className="create_account">
                <Stack>
                    <h3 className="account_head">The Better Way to Trade & Mining</h3>
                    <div className="account_details">
                        <p>Klure Trade helps over 2 million customers achieve their financial goals by helping them trade and invest with ease</p>
                        <button className="btn">Create Free Account</button>
                    </div>
                </Stack>
                
            </div>

        </div>
    </>
  )
}

export default Account