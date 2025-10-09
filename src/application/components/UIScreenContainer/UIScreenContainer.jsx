const UIScreenContainer = ({ children }) => {
  return (
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
  );
};

export default UIScreenContainer;
