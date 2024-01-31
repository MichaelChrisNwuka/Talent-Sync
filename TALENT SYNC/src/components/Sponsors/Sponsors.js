import "../Sponsors/Sponsors.Style.css";
import Shopify from "../Sponsors/Sponsors-Images/Shopify.com svg.png";
import CoinBase from "../Sponsors/Sponsors-Images/Coinbase svg.svg";
import Dropbox from "../Sponsors/Sponsors-Images/Dropbox svg.svg";
import Intercom from "../Sponsors/Sponsors-Images/Intercom svg.svg";
import Marvel from "../Sponsors/Sponsors-Images/Marvel svg.svg";
import Automatic from "../Sponsors/Sponsors-Images/Automattic svg.svg";

const Sponsor = () => {
    return(
        <div className="Sponsors-Container">
            <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
            <div className="Sponsors">
                <img src={Shopify} alt="Shopify" />
                <img src={CoinBase} alt="Coinbase" />
                <img src={Dropbox} alt="Dropbox" />
                <img src={Intercom} alt="Intercom" />
                <img src={Marvel} alt="Marvel" />
                <img src={Automatic} alt="Automatic" />
            </div>
        </div>
    );
}

export default Sponsor;