import levenshtein from "js-levenshtein";
import { useEffect, useRef, useState } from "react";
import CreateGuess from "./components/CreateGuess";
import Result from "./components/Result";

class Guess {
  constructor(
    public text: string,
    public result: number,
    public time: Date = new Date(),
  ) {}
}

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

  const calculateSimilarity  = (str1:string, str2:string) =>{
    
    const distance = levenshtein(str1, str2);
  
    
    const maxLength = Math.max(str1.length, str2.length);
  
    
    const similarityPercentage = ((maxLength - distance) / maxLength) * 100;
  
    return similarityPercentage;
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setUserInput(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData)
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
            <Result key={guess.time.toISOString()} {...guess} />
          ))}
          <div className="pb-0.5" ref={messagesEndRef}></div>
        </div>
      </div>

      <CreateGuess userInput={userInput} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
