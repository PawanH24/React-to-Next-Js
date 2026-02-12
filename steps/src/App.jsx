import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Step />
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  function plusStep() {
    setStep((c) => c + 1);
  }
  function minusStep() {
    setStep((c) => c - 1);
  }
  function plusCount() {
    setCount((c) => c + step);
  }
  function minusCount() {
    if (count > 1) setCount((c) => c - step);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-2">
        <button className="border px-2 rounded " onClick={minusStep}>
          -
        </button>
        <span>Step: {step}</span>
        <button className="border px-2 rounded " onClick={plusStep}>
          +
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <button className="border px-2 rounded " onClick={minusCount}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="border px-2 rounded " onClick={plusCount}>
          +
        </button>
      </div>
      <span className="flex justify-center">
        {count} days from today is{" "}
        {new Date(
          new Date().setDate(new Date().getDate() + count),
        ).toDateString()}
      </span>
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
