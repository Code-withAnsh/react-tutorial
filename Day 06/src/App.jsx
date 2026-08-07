import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react';
import Create from './COMPONETS/Create';
import Read from './COMPONETS/Read';
//must see notes waha maine component break kaise ho rha read write me samjhaya hu
const App = () => {
    const [Todos, setTodos] = useState([
      //     Todos = saare todos ki current value
      //    setTodos = ek function hai jo Todos ki value badalta hai
    ]);
  return (
    <>
      <Create Todos={Todos} setTodos={setTodos} />
      {/* ye todos hi hai jo dono ko chahiye maine pass kar diya
      ab jao tum create aur read file me wha props se share kara do */}
      <Read Todos={Todos} setTodos={setTodos} />
    </>
  );
}

export default App