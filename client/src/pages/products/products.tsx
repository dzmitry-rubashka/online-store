import { Phone } from "../../components/index";

import phones from "../../mock/phones.json";

const Products: React.FC = () => {
  return (
    <>
      <div>Phones</div>
      {phones.map((phone) => (
        <Phone
          key={phone.name}
          name={phone.name}
          price={phone.price}
          operatingSystem={phone.operatingSystem}
          screen={phone.screen}
          screenResolutionHeight={phone.screenResolutionHeight}
          screenResolutionWidth={phone.screenResolutionWidth}
          ram={phone.ram}
          memory={phone.memory}
          camera={phone.camera}
          mah={phone.mah}
          sim={phone.sim}
          imgSrc={phone.imgSrc}
        />
      ))}
    </>
  );
};

export default Products;
