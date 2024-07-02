import { PropsWithChildren } from "react";
import Header from "./_components/Header/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root" className="min-h-screen bg-black text-white">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
