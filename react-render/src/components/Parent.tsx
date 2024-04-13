//components/Parent.tsx
import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [flg, setFlg] = useState(true);
  const notChangeFunc = { value: 0 };

  return (
    <div style={{ border: "1px solid blue", margin: "4rem", padding: "4rem" }}>
      부모 컴포넌트 flg : {flg}
      <button
        style={{
          background: "white",
          marginLeft: "2rem",
          border: "2px solid blue",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => setFlg((v) => !v)}
      >
        toggle
      </button>
      <Child func={setFlg}></Child>
    </div>
  );
};

/* STYLE */

export default Parent;
