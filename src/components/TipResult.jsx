/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const Result = ({ name, value }) => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-VeryLightGrayishCyan">{name}</p>
        <span className="text-sm text-GrayishCyan">/ person</span>
      </div>
      <CountUp
        start={0}
        end={value || 0}
        delay={0}
        prefix="$"
        decimals={value ? 2 : 0}
      >
        {({ countUpRef }) => (
          <h2 className="text-3xl font-bold text-StrongCyan lg:text-5xl">
            <span ref={countUpRef} />
          </h2>
        )}
      </CountUp>
    </div>
  );
};

const TipResult = ({ result, handleReset }) => {
  return (
    <article className="flex flex-1 flex-col justify-between gap-6 rounded-xl bg-VeryDarkCyan px-5 pb-5 pt-10 lg:pb-11 lg:pt-14">
      <div className="flex flex-col gap-6 lg:gap-12 lg:px-4">
        <Result name="Tip Amount" value={result.tipAmount} />
        <Result name="Total" value={result.totalSplit} />
      </div>
      <button
        className="mx-auto w-full rounded-md bg-StrongCyan py-3 text-lg uppercase text-VeryDarkCyan hover:bg-LightGrayishCyan active:bg-StrongCyan lg:max-w-xs"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </article>
  );
};

export default TipResult;
