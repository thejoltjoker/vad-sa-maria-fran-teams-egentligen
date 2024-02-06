import ResultLine from "./ResultLine";

type UserChatBoxProps = {
  text: string;
  time: Date;
  result: number;
};

const UserChatBox = ({ text, time, result }: UserChatBoxProps) => {
  return (
    <>
      <div className="ml-auto w-fit">
        <p className="mb-1 text-end text-sm text-neutral-500">{`${time.getHours()}:${time.getMinutes()}`}</p>

        <div className="rounded-md bg-[#e9ebf9] p-4">
          <p>{text}</p>
        </div>
      </div>
      <ResultLine result={result} />
    </>
  );
};

export default UserChatBox;
