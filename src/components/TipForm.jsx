/* eslint-disable react/prop-types */
import { dollarIcon, personIcon } from "../assets/images";

const TipForm = ({
  handleSubmit,
  formData,
  error,
  handleInput,
  handleTipPercentage,
}) => {
  const defaultTip = [5, 10, 15, 25, 50];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 px-2 lg:py-4 lg:pl-4 lg:pr-4"
    >
      {/* BILL */}
      <div className="mb-2 flex justify-between">
        <label htmlFor="bill" className="input__label">
          Bill
        </label>
        {error.bill && <span className="input__error">{error.bill}</span>}
      </div>
      <input
        type="number"
        name="bill"
        id="bill"
        value={formData.bill}
        onChange={handleInput}
        placeholder="0"
        style={{
          backgroundImage: `url("${dollarIcon}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "1.2rem center",
        }}
        className={`no-spinner w-full rounded-md bg-VeryLightGrayishCyan px-4 py-2 text-right text-2xl text-VeryDarkCyan placeholder:text-GrayishCyan ${
          error.bill ? "outline-red-500" : "outline-StrongCyan"
        }`}
      />

      {/* SELECT TIP % */}
      <div className="mb-4 mt-8 flex justify-between lg:mb-5 lg:mt-9">
        <label htmlFor="tipPercentage" className="input__label">
          Select Tip %
        </label>
        {error.tipPercentage && (
          <span className="input__error">{error.tipPercentage}</span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-4 transition-all lg:grid-cols-3 lg:gap-x-4">
        {defaultTip.map((item, index) => (
          <button
            key={index}
            value={item}
            name="preDefinedTip"
            onClick={handleTipPercentage}
            className={`w-[9rem] rounded-md px-4 py-2 text-2xl text-VeryLightGrayishCyan hover:bg-LightGrayishCyan hover:text-VeryDarkCyan active:bg-StrongCyan lg:max-w-[7.2rem] ${
              item === formData.preDefinedTip
                ? "bg-StrongCyan"
                : "bg-VeryDarkCyan"
            }`}
          >
            {item}%
          </button>
        ))}
        <input
          type="number"
          name="tipPercentage"
          id="tipPercentage"
          value={formData.tipPercentage}
          onChange={handleTipPercentage}
          placeholder="Custom"
          className={`no-spinner w-full max-w-[9rem] rounded-md bg-VeryLightGrayishCyan px-4 py-2 text-right text-2xl text-VeryDarkCyan placeholder:text-GrayishCyan lg:max-w-[7.2rem] lg:px-2 lg:text-xl ${
            error.bill ? "outline-red-500" : "outline-StrongCyan"
          }`}
        />
      </div>

      {/* NUMBER OF PEOPLE */}
      <div className="mb-2 mt-8 flex justify-between lg:mt-10">
        <label htmlFor="numberOfPeople" className="input__label">
          Number of People
        </label>
        {error.numberOfPeople && (
          <span className="input__error">{error.numberOfPeople}</span>
        )}
      </div>
      <input
        type="number"
        name="numberOfPeople"
        id="numberOfPeople"
        value={formData.numberOfPeople}
        onChange={handleInput}
        placeholder="0"
        style={{
          backgroundImage: `url("${personIcon}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "1.2rem center",
        }}
        className={`no-spinner w-full rounded-md bg-VeryLightGrayishCyan px-4 py-2 text-right text-2xl text-VeryDarkCyan placeholder:text-GrayishCyan ${
          error.numberOfPeople ? "outline-red-500" : "outline-StrongCyan"
        }`}
      />
    </form>
  );
};

export default TipForm;
