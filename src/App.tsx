import levenshtein from "js-levenshtein";
import { useEffect, useRef, useState } from "react";
import UserChatBox from "./components/UserChatBox";

class Guess {
  constructor(
    public text: string,
    public result: number,
    public time: Date = new Date(),
  ) {}
}

function App() {
  const [truth] = useState("How about a home as a normal sister?");
  const [input, setInput] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = levenshtein(truth, input);
    const guess = new Guess(input, result);
    setGuesses([...guesses, guess]);

    setInput("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [guesses]);

  return (
    <div className="relative h-screen w-full">
      <div
        id="chat"
        className="mx-auto flex h-[calc(100%-6rem)] w-full flex-col gap-8 overflow-y-scroll px-4 py-8 text-neutral-800"
      >
        <div className="mx-auto my-4 flex h-full w-full max-w-xl flex-col gap-8 pr-2">
          <div className="flex items-center gap-4 text-neutral-500">
            <div className="size-3 rounded-full border border-white bg-neutral-500 outline outline-1"></div>
            <p>
              <span className="font-bold">Sebastian</span> startade
              transkriptionen
            </p>
          </div>
          <div className="w-fit">
            <p className="mb-1 text-sm text-neutral-500">
              <span className="font-bold">Maria</span> 0:05
            </p>
            <div className="rounded-md bg-neutral-100 p-4">
              <p>{truth}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <div className="size-3 rounded-full border border-white bg-neutral-500 outline outline-1"></div>
            <p>
              <span className="font-bold">Sebastian</span> stoppade
              transkriptionen
            </p>
          </div>
          {guesses.map((guess) => (
            <UserChatBox {...guess} />
          ))}
          <div className="pb-0.5" ref={messagesEndRef}></div>
        </div>
      </div>

      <div
        id="input"
        className="absolute bottom-0 flex h-[6rem] w-full flex-col items-center justify-center border-t border-neutral-200 bg-white px-4"
      >
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-xl gap-2"
        >
          <input
            type="text"
            placeholder="Vad sa Maria från Teams egentligen?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:border-primary focus:ring-primary shrink grow rounded-md border border-neutral-200"
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
    </div>
  );
}

export default App;
