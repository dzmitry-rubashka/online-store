import { Phone, Page, Input } from "../../components/index";

import phones from "../../mock/phones.json";

import "./products.css";

const Products: React.FC = () => {
  return (
    <Page title="Products">
      <div className="phones-container">
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
      </div>
      <Input />
    </Page>
  );
};

export default Products;
