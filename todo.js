// function Todo({todo,index,remove}){
//   function handle(){
//     console.log('Ping:',index);
//     remove(index);
//   }
//   return <div className="todo" onClick={handle}>{todo.text} (-)</div>
// }

function Todo({todo,index,remove}){
  function handleRemove(){
    console.log('Ping:',index);
    remove(index);
  }

  return (
    <div className="todo">
      <span>{todo.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
