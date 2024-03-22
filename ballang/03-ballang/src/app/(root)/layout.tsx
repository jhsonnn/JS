import Header from "@/src/app/(root)/_components/Header";
import ReactQueryProvider from "@/src/react-query/client.react-query";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <div>
        <Header />
        {children}
      </div>
    </ReactQueryProvider>
  );
}

export default RootLayout;
