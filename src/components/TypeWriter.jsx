import React, { useEffect, useState } from "react";

const Heading = ({
  firstLine = "Hi there!",
  secondLine = "I'm Nivedita",
  summaryText = "A passionate problem solver.",
}) => {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [summary, setSummary] = useState("");
  const typingSpeed1 = 200;
  const typingSpeed2 = 100;

  useEffect(() => {
    let i = 0;
    const typeFirstInterval = setInterval(() => {
      setFirstText(firstLine.substring(0, i + 1));
      i++;

      if (i >= firstLine.length) {
        clearInterval(typeFirstInterval);

        setTimeout(() => {
          let j = 0;
          const typeSecondInterval = setInterval(() => {
            setSecondText(secondLine.substring(0, j + 1));
            j++;

            if (j >= secondLine.length) {
              clearInterval(typeSecondInterval);

              setTimeout(() => {
                let k = 0;
                const typeSummaryInterval = setInterval(() => {
                  setSummary(summaryText.substring(0, k + 1));
                  k++;

                  if (k >= summaryText.length) {
                    clearInterval(typeSummaryInterval);
                  }
                }, typingSpeed2);
              }, 500);
            }
          }, typingSpeed1);
        }, 400);
      }
    }, typingSpeed1);

    return () => clearInterval(typeFirstInterval);
  }, [firstLine, secondLine, summaryText]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black font-[Special_Elite] px-6 text-center max-w-xl mx-auto overflow-x-hidden -mt-50">
      <h1 className="text-6xl">
        {firstText}
        {firstText.length < firstLine.length && <span className="animate-pulse">|</span>}
      </h1>
      <br />
      <h2 className="text-5xl">
        {secondText}
        {firstText === firstLine && secondText.length < secondLine.length && (
          <span className="animate-pulse">|</span>
        )}
      </h2>
      <p className="mt-8 text-2xl text-gray-700 whitespace-pre-wrap">
        {summary}
      </p>
    </div>
  );
};

export default Heading;
