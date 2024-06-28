const Counter = ({ count, setter }) => {
  return <button onClick={() => setter(count => count + 1)}>count is {count}</button>
}

export default Counter
