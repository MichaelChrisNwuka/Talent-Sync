import "../FreeTrial/FreeTrial.Style.css";
import FreeTrialImage from "../FreeTrial/FreeTrial-Images/FreeTrial.png";

const FreeTrial = () => {
  return (
    <div className="FreeTrial-Container">
      <div className="Col">
        <h1>Ready to clear the path to perfect communication?</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
              stroke="#175CD3"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>30 days free trial</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
              stroke="#175CD3"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Cancel at any time</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
              stroke="#175CD3"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Access to all features</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
              stroke="#175CD3"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Peronalized onboarding</p>
        </div>
      </div>
      <div className="Col">
        <img src={FreeTrialImage} alt="" />
      </div>
    </div>
  );
};

export default FreeTrial;
