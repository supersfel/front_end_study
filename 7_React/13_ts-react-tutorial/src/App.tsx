//App.tsx
import React from "react";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

const App: React.FC = () => {
  //화살표함수로 선언

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      {/* <Counter/>
      <MyForm onSubmit={onSubmit}/> */}
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
};

export default App;
