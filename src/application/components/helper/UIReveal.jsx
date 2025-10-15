import { useEffect, useRef, useState } from "react";
import "./UIReveal.scss";

const UIReveal = ({ children, animation = "fade-up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // lebih longgar
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${animation} ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default UIReveal;
