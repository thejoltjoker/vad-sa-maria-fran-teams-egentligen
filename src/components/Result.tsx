import OutgoingMessage from "./OutgoingMessage";
import ResultLine from "./ResultLine";

type ResultProps = {
  text: string;
  time: Date;
  result: number;
};

const Result = (props: ResultProps) => {
  return (
    <>
      <OutgoingMessage {...props} />
      <ResultLine result={props.result} />
    </>
  );
};

export default Result;
