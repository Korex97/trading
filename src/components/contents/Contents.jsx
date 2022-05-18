import "./Content.css";
import HeadSection from './headSection/HeadSection';
import Services from './services/Services';
import Coins from "./coins/Coins";
import Customer from "./customer/Customer";
import Packages from "./packages/Packages";
import Account from "./account/Account";

const Contents = () => {
  return (
    <>
      <HeadSection />
      <Services />
      <Coins />
      <Packages />
      <Account />
      <Customer />
    </>
  )
}

export default Contents