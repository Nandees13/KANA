import "./PrimaryButton.css";

const PrimaryButton = () => {
  return (
    <button className="primary-button">
      <div className="primary-button1" />
      <div className="from-date-column">
        <div className="filter">Filter</div>
      </div>
      <div className="no-used">
        <img className="slider-icon" alt="" src="/slider@2x.png" />
      </div>
    </button>
  );
};

export default PrimaryButton;
