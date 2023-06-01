// import { useState } from "react";

import { Input, Label } from "../../components/index";

// import SearchFormProps from "./types";
import "./search-form.css";

const SearchFrom: React.FC = () => {
  // const [searchForm, setSearchForm] = useState({
  //   name: "",
  //   minPrice: 0,
  //   maxPrice: 0,
  //   operatingSystem: "",
  //   minScreenResolution: 0,
  //   maxScreenResolution: 0,
  //   minRam: 0,
  //   maxRam: 0,
  //   minMemory: 0,
  //   maxMemory: 0,
  //   minMpx: 0,
  //   maxMpx: 0,
  //   minMah: 0,
  //   maxMah: 0,
  //   sim: 0,
  // });

  return (
    <section className="search-form-container">
      <p>Search Parameters</p>
      <Label id="name">
        Device Name
        <Input id="name" />
      </Label>
      <Label id="minPrice">
        Min Price
        <Input id="minPrice" />
      </Label>
      <Label id="maxPrice">
        Min Price
        <Input id="maxPrice" />
      </Label>
      <Label id="operatingSystem">
        Operating System
        <Input id="operatingSystem" />
      </Label>
      <Label id="minScreenResolution">
        Min Screen Resolution
        <Input id="minScreenResolution" />
      </Label>
      <Label id="maxScreenResolution">
        Max Screen Resolution
        <Input id="maxScreenResolution" />
      </Label>
      <Label id="minRam">
        Min RAM
        <Input id="minRam" />
      </Label>
      <Label id="maxRam">
        Max RAM
        <Input id="maxRam" />
      </Label>
      <Label id="minMemory">
        Min Memory
        <Input id="minMemory" />
      </Label>
      <Label id="maxMemory">
        Miax Memory
        <Input id="maxMemory" />
      </Label>
      <Label id="minMpx">
        Min Mpx
        <Input id="minMpx" />
      </Label>
      <Label id="maxMpx">
        Max Mpx
        <Input id="maxMpx" />
      </Label>
      <Label id="minMah">
        Min mAh
        <Input id="minMah" />
      </Label>
      <Label id="maxMah">
        Max mAh
        <Input id="maxMah" />
      </Label>
      <Label id="sim">
        SIM
        <Input id="sim" />
      </Label>
    </section>
  );
};

export default SearchFrom;
