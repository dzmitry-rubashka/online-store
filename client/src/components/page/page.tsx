import { Header } from "../index";

import PageProps from "./types";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
    </>
  );
};

export default Page;
