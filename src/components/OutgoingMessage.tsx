type OutgoingMessageProps = {
  text: string;
  time: Date;
};

const OutgoingMessage = ({ text, time }: OutgoingMessageProps) => {
  const zeroPad = (n: number, pad = 2) => String(n).padStart(pad, "0");
  return (
    <div className="ml-auto w-fit">
      <p className="mb-1 text-end text-sm text-neutral-500">{`${zeroPad(time.getHours())}:${zeroPad(time.getMinutes())}`}</p>

      <div className="rounded-md bg-[#e9ebf9] p-4">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default OutgoingMessage;
