const UIText = ({ children, className = "", props }) => {
  return (
    <div className={`ui-text ${className}`} {...props}>
      {children}
    </div>
  );
};

export default UIText;
