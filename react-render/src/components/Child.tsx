import { memo, useEffect } from "react";

// components/Child.tsx

const Child = memo(({ func }: any) => {
  useEffect(() => {
    func();
  });
  return (
    <div style={{ border: "1px solid green", margin: "4rem", padding: "4rem" }}>
      자식 컴포넌트
    </div>
  );
});

/* STYLE */

export default Child;
