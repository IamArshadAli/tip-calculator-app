import { useEffect, useState } from "react";

import { logo } from "./assets/images";
import { TipForm, TipResult } from "./components";

const App = () => {
  const initialData = {
    bill: "",
    preDefinedTip: "",
    tipPercentage: "",
    numberOfPeople: "",
  };

  const initialResult = {
    tipAmount: 0,
    totalSplit: 0,
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState({});

  const [result, setResult] = useState(initialResult);

  useEffect(() => {
    const valid = validateInputs();
    if (valid) return calculateTip();
    setResult(initialResult);
  }, [formData]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleTipPercentage = (e) => {
    if (e.target.name === "tipPercentage")
      return setFormData({
        ...formData,
        [e.target.name]: Number(e.target.value),
        preDefinedTip: "",
      });
    //
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
      tipPercentage: "",
    });
  };

  function validateInputs() {
    const newError = {};

    // Handle Empty Input
    if (!formData.bill) newError.bill = "";
    if (!formData.tipPercentage && !formData.preDefinedTip)
      newError.tipPercentage = "";
    if (!formData.numberOfPeople) newError.numberOfPeople = "";

    // Handle Zero
    if (formData.bill === 0) newError.bill = "Can't be zero";
    if (formData.tipPercentage === 0) newError.tipPercentage = "Can't be zero";
    if (formData.numberOfPeople === 0)
      newError.numberOfPeople = "Can't be zero";

    // Handle Negative
    if (formData.bill < 0) newError.bill = "Invalid";
    if (formData.tipPercentage < 0) newError.tipPercentage = "Invalid";
    if (formData.numberOfPeople < 0) newError.numberOfPeople = "Invalid";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return false;
    }

    setError({});
    return true;
  }

  function calculateTip() {
    var calculatedResult = {
      totalSplit: 0,
      tipAmount: 0,
    };

    var tipPercentage = formData.preDefinedTip
      ? formData.preDefinedTip
      : formData.tipPercentage;
    tipPercentage = tipPercentage / 100;

    const tipAmount = (formData.bill * tipPercentage) / formData.numberOfPeople;
    calculatedResult.tipAmount = parseFloat(tipAmount.toFixed(2)) || 0;

    const totalSplit =
      formData.bill / formData.numberOfPeople + calculatedResult.tipAmount;
    calculatedResult.totalSplit = parseFloat(totalSplit.toFixed(2)) || 0;

    setResult(calculatedResult);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setFormData(initialData);
    setError({});
    setResult(initialResult);
  };

  return (
    <main className="flex h-screen min-h-screen w-screen flex-col items-center justify-start gap-10 bg-LightGrayishCyan py-24 font-SpaceMono md:justify-center lg:gap-[5.5rem]">
      <figure className="lg:-mt-16">
        <img src={logo} alt="Splitter" className="" />
      </figure>
      <section className="shadow-Str flex w-full flex-col gap-8 rounded-3xl bg-White px-6 py-8 shadow-2xl transition-all md:max-w-md lg:max-w-[57.5rem] lg:flex-row lg:gap-9 lg:px-8 lg:pb-7">
        <TipForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleTipPercentage={handleTipPercentage}
          formData={formData}
          error={error}
        />
        <TipResult result={result} handleReset={handleReset} />
      </section>
    </main>
  );
};

export default App;
