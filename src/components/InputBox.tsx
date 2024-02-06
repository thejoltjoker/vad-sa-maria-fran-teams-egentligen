import React from "react";

type InputBoxProps = {
  userInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const InputBox = ({ userInput, onChange, onSubmit }: InputBoxProps) => {
  return (
    <div
      id="input"
      className="absolute bottom-0 flex h-[6rem] w-full flex-col items-center justify-center border-t border-neutral-200 bg-white px-4"
    >
      <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl gap-2">
        <input
          type="text"
          name="guess"
          placeholder="Vad sa Maria från Teams egentligen?"
          value={userInput}
          onChange={onChange}
          className="shrink grow rounded-md border border-neutral-200 focus:border-primary focus:ring-primary"
        />
        <button className="rounded-md border border-neutral-200 bg-neutral-100 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default InputBox;
