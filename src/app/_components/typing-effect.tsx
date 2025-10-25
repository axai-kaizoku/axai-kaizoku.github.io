export const TypingEffect = () => {
  const displayedText = "AKSHAY YELLE";

  return (
    <h1 className="text-center font-montserrat text-4xl font-bold tracking-[-0.02em] drop-shadow- lg:text-6xl xl:mb-4 2xl:text-8xl">
      {displayedText ? displayedText : <>&nbsp;</>}
    </h1>
  );
};
