import React, { useState } from "react";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitBy, setSplitBy] = useState(1);

  const handleReset = () => {
    setBillAmount("");
    setTipPercentage(10);
    setSplitBy(1);
  };

  const calculateTip = () => {
    const amount = parseFloat(billAmount) || 0;
    const tipAmount = (amount * tipPercentage) / 100;
    const total = amount + tipAmount;
    const perPerson = splitBy ? total / splitBy : 0;
    return { tipAmount, total, perPerson };
  };

  const { tipAmount, total, perPerson } = calculateTip();

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="flex md:flex-row flex-col w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden ">
        <div className="flex flex-col md:w-1/2 w-full p-6 space-y-4 ">
          <p className="font-bold text-3xl">Calculate Tip</p>
          <input
            type="number"
            placeholder="Bill Amount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />

          <p className="text-lg font-semibold">Choose a Tip</p>
          <div className="flex space-x-2 mt-2">
            {[10, 15, 20, 25].map((percentage) => (
              <button
                key={percentage}
                onClick={() => setTipPercentage(percentage)}
                className={`px-3 py-2 border rounded-3xl ${
                  tipPercentage === percentage
                    ? "bg-[#288B54] text-white"
                    : "bg-white"
                }`}
              >
                {percentage}%
              </button>
            ))}
          </div>

          <p className="text-lg font-semibold">Split By</p>
          <input
            type="number"
            placeholder="Split By"
            value={splitBy}
            onChange={(e) => setSplitBy(parseFloat(e.target.value) || 1)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div className="flex flex-col md:w-1/2 w-full p-6 space-y-4">
          <div className="p-4 text-white h-full rounded-lg bg-[#288B54]">
            <div className="flex justify-between py-2">
              <p className="font-semibold">Base</p>
              <p>${parseFloat(billAmount) || 0}</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="font-semibold">Tip Amount</p>
              <p>${tipAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between pt-2 pb-8">
              <p className="font-semibold">Per Person</p>
              <p>${perPerson.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between pt-6 pb-2">
              <p className="font-semibold">Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-4 my-2 py-2 mt-4 bg-[#227046] text-white rounded w-full hover:bg-[#288B69]"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
