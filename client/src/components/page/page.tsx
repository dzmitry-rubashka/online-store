import { Header } from "../index.ts";

import PageProps from "./types.ts";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
    </>
  );
};

export default Page;
