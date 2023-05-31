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
    <>
      <div>{name}</div>
      <div>{price}</div>
      <div>{operatingSystem}</div>
      <div>{screen}</div>
      <div>{screenResolutionHeight}</div>
      <div>{screenResolutionWidth}</div>
      <div>{ram}</div>
      <div>{memory}</div>
      <div>{camera}</div>
      <div>{mah}</div>
      <div>{sim}</div>
      <img src={imgSrc} alt={name} />
    </>
  );
};

export default Phone;
