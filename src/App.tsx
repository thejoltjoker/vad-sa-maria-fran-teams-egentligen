import levenshtein from "js-levenshtein";
import { useEffect, useRef, useState } from "react";
import InputBox from "./components/InputBox";
import Result from "./components/Result";
import EventMessage from "./components/EventMessage";
import IncomingMessage from "./components/IncomingMessage";
import { Guess } from "./models/Guess";

function App() {
  const [truth] = useState("How about a home as a normal sister?");
  const [userInput, setUserInput] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateSimilarity = (str1: string, str2: string) => {
    const distance = levenshtein(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    const similarityPercentage = ((maxLength - distance) / maxLength) * 100;

    return similarityPercentage;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const result = calculateSimilarity(truth, userInput);
    const guess = new Guess(userInput, result);
    setGuesses([...guesses, guess]);
    setUserInput("");
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
          <EventMessage>
            <span className="font-bold">Sebastian</span> startade
            transkriptionen
          </EventMessage>
          <IncomingMessage time="0:05">{truth}</IncomingMessage>
          <EventMessage>
            <span className="font-bold">Sebastian</span> stoppade
            transkriptionen
          </EventMessage>
          {guesses.map((guess) => (
            <Result key={guess.time.toISOString()} {...guess} />
          ))}
          <div className="pb-0.5" ref={messagesEndRef}></div>
        </div>
      </div>

      <InputBox
        userInput={userInput}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
