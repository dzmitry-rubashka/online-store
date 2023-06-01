import PhoneProps from "./types";

import "./phone.css";

const Phone: React.FC<PhoneProps> = ({
  name,
  price,
  operatingSystem,
  screen,
  screenResolutionHeight,
  screenResolutionWidth,
  ram,
  memory,
  camera,
  mah,
  sim,
  imgSrc,
}) => {
  return (
    <div className="phone-container">
      <div>
        <img src={imgSrc} alt={name} className="phone-image"/>
      </div>
      <div className="characteristics">
        <p>{name}</p>
        <p>Price: {price} $</p>
        <p>Operating System: {operatingSystem}</p>
        <p>
          Screen: {screen} ({screenResolutionWidth}x{screenResolutionHeight})
        </p>
        <p>RAM: {ram} GB</p>
        <p>Memory: {memory} GB</p>
        <p>Camera: {camera} Mpx</p>
        <p>Battery: {mah} mAh</p>
        <p>SIM: {sim}</p>
      </div>
    </div>
  );
};

export default Phone;
