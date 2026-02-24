import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [fTip, setFTip] = useState(0);

  const avgTip = (tip + fTip) / 2;

  function handleReset() {
    setBill("");
    setTip(0);
    setFTip(0);
  }
  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <div className="hor">
        <TipP tip={tip} setTip={setTip}>
          How did you like the service?
        </TipP>
      </div>

      <div className="hor">
        <TipP tip={fTip} setTip={setFTip}>
          How did your friend like the service?
        </TipP>
      </div>
      <Receipt tip={avgTip} bill={bill} />
      <Reset onReset={handleReset} />
    </>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div className="hor">
      <p>How much was the bill?</p>
      <input
        type="number"
        placeholder="0"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function TipP({ children, tip, setTip }) {
  return (
    <div className="hor">
      <p>{children}</p>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">it was ok 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">it was amazing 20%</option>
      </select>
    </div>
  );
}

function Receipt({ tip, bill }) {
  const numericBill = Number(bill);
  if (numericBill === 0) return <p>Your total is 0</p>;
  const tipAmount = numericBill * (tip / 100);
  const total = numericBill + tipAmount;
  return (
    <>
      <p>
        Your Total is: ${total} (${numericBill} + ${tipAmount.toFixed(2)} tip)
      </p>
    </>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
