type ResultLineProps = {
  result: number;
};

const ResultLine = ({ result }: ResultLineProps) => {
  return (
    <div className="flex items-center">
      <div className="border-primary grow border-t"></div>
      <div className="text-primary mx-6 text-center text-sm font-bold">
        {100 - result}% sannolikhet
      </div>
      <div className="border-primary grow border-t"></div>
    </div>
  );
};

export default ResultLine;
