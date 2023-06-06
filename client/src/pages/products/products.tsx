import { useState } from "react";

import {
  Phone,
  Page,
  Input,
  Label,
  Dropdown,
  Button,
} from "../../components/index";

import {
  ProductsPageProps,
  SearchFormStateProps,
  FilteredStateProps,
} from "./types";

import mockPhones from "../../mock/phones.json";

import "./products.css";

const Products: React.FC<ProductsPageProps> = () => {
  const [phonesData, setPhonesData] =
    useState<SearchFormStateProps[]>(mockPhones);

  const [filteredState, setFilteredState] = useState<FilteredStateProps>({
    name: "",
    minPrice: 0,
    maxPrice: 2000,
    operatingSystem: "Android",
    minScreenResolution: 4,
    maxScreenResolution: 8,
    minRam: 1,
    maxRam: 16,
    minMemory: 8,
    maxMemory: 1024,
    minMpx: 4,
    maxMpx: 256,
    minMah: 2000,
    maxMah: 9000,
    sim: 1,
  });

  const operatingSystem: string[] = ["Android", "iOS"];
  const screenResolution: number[] = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
  const ram: number[] = [1, 2, 4, 6, 8, 10, 12, 16];
  const memory: number[] = [8, 16, 32, 64, 128, 256, 512, 1024];
  const mpx: number[] = [4, 8, 12, 16, 48, 64, 128, 256];
  const mah: number[] = [2000, 3000, 4000, 6000, 7000, 8000, 9000];
  const simCards: number[] = [1, 2];

  const isFormValid: boolean =
    filteredState.maxPrice >= filteredState.minPrice &&
    filteredState.maxScreenResolution >= filteredState.minScreenResolution &&
    filteredState.maxRam >= filteredState.minRam &&
    filteredState.maxMemory >= filteredState.minMemory &&
    filteredState.maxMpx >= filteredState.minMpx &&
    filteredState.maxMah >= filteredState.minMah;

  const onSubmitForm = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setPhonesData(
      mockPhones.filter((phone) => {
        return filteredState.name === ""
          ? phone.price >= filteredState.minPrice &&
              phone.price <= filteredState.maxPrice &&
              phone.operatingSystem === filteredState.operatingSystem &&
              phone.screen >= filteredState.minScreenResolution &&
              phone.screen <= filteredState.maxScreenResolution &&
              phone.ram >= filteredState.minRam &&
              phone.ram <= filteredState.maxRam &&
              phone.memory >= filteredState.minMemory &&
              phone.memory <= filteredState.maxMemory &&
              phone.camera >= filteredState.minMpx &&
              phone.camera <= filteredState.maxMpx &&
              phone.mah >= filteredState.minMah &&
              phone.mah <= filteredState.maxMah &&
              phone.sim === filteredState.sim
          : phone.name
              .replace(/\s/g, "")
              .toLowerCase()
              .includes(filteredState.name.toLowerCase()) &&
              phone.price >= filteredState.minPrice &&
              phone.price <= filteredState.maxPrice &&
              phone.operatingSystem === filteredState.operatingSystem &&
              phone.screen >= filteredState.minScreenResolution &&
              phone.screen <= filteredState.maxScreenResolution &&
              phone.ram >= filteredState.minRam &&
              phone.ram <= filteredState.maxRam &&
              phone.memory >= filteredState.minMemory &&
              phone.memory <= filteredState.maxMemory &&
              phone.camera >= filteredState.minMpx &&
              phone.camera <= filteredState.maxMpx &&
              phone.mah >= filteredState.minMah &&
              phone.mah <= filteredState.maxMah &&
              phone.sim === filteredState.sim;
      })
    );
  };

  const onResetForm = (event: React.MouseEvent): void => {
    event.preventDefault();
    setPhonesData(mockPhones);
    setFilteredState({
      name: "",
      minPrice: 0,
      maxPrice: 2000,
      operatingSystem: "Android",
      minScreenResolution: 4,
      maxScreenResolution: 8,
      minRam: 1,
      maxRam: 16,
      minMemory: 8,
      maxMemory: 1024,
      minMpx: 4,
      maxMpx: 256,
      minMah: 2000,
      maxMah: 9000,
      sim: 1,
    });
  };

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.id === "name"
      ? setFilteredState({
          ...filteredState,
          [event.target.id]: event.target.value,
        })
      : setFilteredState({
          ...filteredState,
          [event.target.id]: +event.target.value,
        });
  };

  const onChangeDropdownValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.target.id === "operatingSystem"
      ? setFilteredState({
          ...filteredState,
          [event.target.id]: event.target.value,
        })
      : setFilteredState({
          ...filteredState,
          [event.target.id]: +event.target.value,
        });
  };

  return (
    <Page title="Products" className="products-container">
      <div className="phones-container">
        {phonesData.map((phone) => (
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
      <section className="search-form-container">
        <form onSubmit={onSubmitForm}>
          <p>Search Parameters</p>
          <Label id="name">
            Device Name{" "}
            <Input
              id="name"
              type="string"
              value={filteredState.name}
              onChange={onChangeInputValue}
            />
          </Label>
          <Label id="minPrice">
            Min Price, ${" "}
            <Input
              id="minPrice"
              type="number"
              value={filteredState.minPrice}
              onChange={onChangeInputValue}
            />
          </Label>
          <Label id="maxPrice">
            Max Price, ${" "}
            <Input
              id="maxPrice"
              type="number"
              value={filteredState.maxPrice}
              onChange={onChangeInputValue}
            />
          </Label>
          <Label id="operatingSystem">
            Operating System{" "}
            <Dropdown
              id="operatingSystem"
              name="operatingSystem"
              value={filteredState.operatingSystem}
              options={operatingSystem}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="minScreenResolution">
            Min Screen Resolution, "{" "}
            <Dropdown
              id="minScreenResolution"
              name="minScreenResolution"
              value={filteredState.minScreenResolution}
              options={screenResolution}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="maxScreenResolution">
            Max Screen Resolution, "{" "}
            <Dropdown
              id="maxScreenResolution"
              name="maxScreenResolution"
              value={filteredState.maxScreenResolution}
              options={screenResolution}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="minRam">
            Min RAM, GB{" "}
            <Dropdown
              id="minRam"
              name="minRam"
              value={filteredState.minRam}
              options={ram}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="maxRam">
            Max RAM, GB{" "}
            <Dropdown
              id="maxRam"
              name="maxRam"
              value={filteredState.maxRam}
              options={ram}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="minMemory">
            Min Memory, GB{" "}
            <Dropdown
              id="minMemory"
              name="minMemory"
              value={filteredState.minMemory}
              options={memory}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="maxMemory">
            Max Memory, GB{" "}
            <Dropdown
              id="maxMemory"
              name="maxMemory"
              value={filteredState.maxMemory}
              options={memory}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="minMpx">
            Min Mpx{" "}
            <Dropdown
              id="minMpx"
              name="minMpx"
              value={filteredState.minMpx}
              options={mpx}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="maxMpx">
            Max Mpx{" "}
            <Dropdown
              id="maxMpx"
              name="maxMpx"
              value={filteredState.maxMpx}
              options={mpx}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="minMah">
            Min mAh{" "}
            <Dropdown
              id="minMah"
              name="minMah"
              value={filteredState.minMah}
              options={mah}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="maxMah">
            Max mAh{" "}
            <Dropdown
              id="maxMah"
              name="maxMah"
              value={filteredState.maxMah}
              options={mah}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Label id="sim">
            SIM{" "}
            <Dropdown
              id="sim"
              name="sim"
              value={filteredState.sim}
              options={simCards}
              onChange={onChangeDropdownValue}
            />
          </Label>
          <Button
            value="Reset"
            variant="primary"
            type="reset"
            onClick={onResetForm}
          />
          {!isFormValid ? (
            <p className="form-validation">Form is not valid</p>
          ) : (
            <Button value="Search" variant="primary" type="submit" />
          )}
        </form>
      </section>
    </Page>
  );
};

export default Products;
