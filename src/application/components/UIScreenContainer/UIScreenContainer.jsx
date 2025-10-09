const UIScreenContainer = ({ children }) => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch", // ❗ biar full-width
        justifyContent: "flex-start", // ❗ biar ga ketengah semua
        padding: 0,
        margin: 0,
      }}
    >
      {children}
    </main>
  );
};

export default UIScreenContainer;
