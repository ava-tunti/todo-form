// function Todo({todo,index,remove}){
//   function handle(){
//     console.log('Ping:',index);
//     remove(index);
//   }
//   return <div className="todo" onClick={handle}>{todo.text} (-)</div>
// }

// function Todo({todo,index,remove}){
//   function handleRemove(){
//     console.log('Ping:',index);
//     remove(index);
//   }

//   return (
//     <div className="todo">
//       <span>{todo.text}</span>
//       <button onClick={handleRemove}>Remove</button>
//     </div>
//   );
// }

// function Todo({todo, index, remove}) {
//   // This function will call the remove function passed from the parent component
//   function handleRemove() {
//     remove(index);
//   }

//   return (
//     <div className="todo">
//       {todo.text}
//       <button onClick={handleRemove} className="remove-btn">Remove</button>
//     </div>
//   );
// }

function Todo({ todo, index, remove }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <button onClick={() => remove(index)}>Remove</button>
    </div>
  );
}
