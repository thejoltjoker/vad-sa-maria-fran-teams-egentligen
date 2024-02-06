import UserChatBox from './UserChatBox';
import ResultLine from './ResultLine';

type ResultProps = {
  text: string;
  time: Date;
  result: number;
};

const Result = (props: ResultProps) => {
  return (
    <>
      <UserChatBox {...props}/>
      <ResultLine result={props.result} />
    </>
  )
}

export default Result