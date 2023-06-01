import { Phone, Page, SearchForm } from "../../components/index";

import phones from "../../mock/phones.json";

import "./products.css";

const Products: React.FC = () => {
  return (
    <Page title="Products" className="products-container">
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
      <SearchForm />
    </Page>
  );
};

export default Products;
