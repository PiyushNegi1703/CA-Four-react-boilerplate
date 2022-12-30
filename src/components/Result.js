export default function Result(props) {

  let {right, restart} = props;
  let percentage = (right / 5) * 100;

  return (
    <div>
      <h2>Final Results</h2>

      <h4>{right} out of 5 correct - ({percentage}%)</h4>

      <button onClick={() => restart}>Restart Game</button>
    </div>
  )
}