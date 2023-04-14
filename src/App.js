import './App.css';
import Form from './components/Form.js';
import React, {useState} from 'react';
import Clock from './components/Clock.js'


function App() {
  const [form, setForm] = useState({
    name: '',
    timeZone: ''
  });

  const [closks, setClocks] = useState([]);

  const handler = (e) => {
    e.preventDefault();
    
    setClocks(prevClocks => {
      if ((prevClocks.map(el => {return el.name})).includes(form.name)
          || !['Tokyo', 'Moscow', 'London', 'New York'].includes(form.name)) {
        alert('data-error');
        return prevClocks;
      }
      return [...prevClocks, {'name': form.name, 'timeZone': form.timeZone}]
    });
    
    setForm({
      name: '',
      timeZone: ''
    })
  };

  const remove = (e) => {
    const clock = e.target.parentNode.textContent;
    setClocks(prevClocks => {
      return prevClocks.filter(el => {return el.name !== clock});
    })
  }

  return <div>
    <form 
      className='form'
      autoComplete='off'
      onSubmit={handler}
    > 
      <Form form={form} setForm={setForm} />
    </form>

    <ul className='clocks'>{closks.map(el => { 
      return <li key={crypto.randomUUID()}>
        <Clock name={el.name} 
          timeZone={el.timeZone}
          remove={remove}
        />
        </li> 
      })}
    </ul>
  </div>
}

export default App;
