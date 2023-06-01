import { Header } from "../index";

import PageProps from "./types";

const Page: React.FC<PageProps> = ({ title, children, className }) => {
  return (
    <>
      <Header title={title} />
      <main className={className}>{children}</main>
    </>
  );
};

export default Page;
