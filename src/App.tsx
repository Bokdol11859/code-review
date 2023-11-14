interface Props {
  text: string;
  number: number;
}

function App({ text, number }: Props) {
  return (
    <div>
      {text}
      {number}
    </div>
  );
}
export default App;
