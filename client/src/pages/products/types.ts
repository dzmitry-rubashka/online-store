interface SearchFormStateProps {
  name: string;
  price: number;
  operatingSystem: string;
  screen: number;
  screenResolutionHeight: number;
  screenResolutionWidth: number;
  ram: number;
  memory: number;
  camera: number;
  mah: number;
  sim: number;
  imgSrc: string;
}

interface FilteredStateProps {
  name: string;
  minPrice: number;
  maxPrice: number;
  operatingSystem: string;
  minScreenResolution: number;
  maxScreenResolution: number;
  minRam: number;
  maxRam: number;
  minMemory: number;
  maxMemory: number;
  minMpx: number;
  maxMpx: number;
  minMah: number;
  maxMah: number;
  sim: number;
}

interface ProductsPageProps {
  phones: Array<SearchFormStateProps>;
  // filteredState: SearchFormStateProps;
}

export type { ProductsPageProps, SearchFormStateProps, FilteredStateProps };
