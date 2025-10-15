import UIFooter from "../UIFooter/UIFooter";
import UIHeader from "../UIHeader/UIHeader";

const UIScreenContainer = ({ children }) => {
  return (
    <>
      <UIHeader />
      <main
        style={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
          margin: 0,
          padding: 0,
          backgroundColor: "#fff",
          overflowX: "hidden",
        }}
      >
        {children}
      </main>

      <UIFooter />
    </>
  );
};

export default UIScreenContainer;
