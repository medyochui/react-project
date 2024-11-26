/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello test REact 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import "./App.css";
import logo from "./assets/mackunlogo.jpg";

const App = () => {
  const [queue, setQueue] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Add item to the queue
  const enqueue = () => {
    if (newItem.trim()) {
      setQueue([...queue, newItem]);
      setNewItem("");
    }
  };

  // Remove item from the queue
  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = queue.slice(1);
      setQueue(updatedQueue);
    }
  };

  return (
    <div className="App">
       {/* Logo in the top-right corner */}
       <img src={logo} alt="Logo" className="logo" />

      <h1>Mackun Queuing System</h1>
      <div className="queue-controls">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={enqueue}>Add to Queue</button>
        <button onClick={dequeue}>Remove from Queue</button>
      </div>
      <div className="queue-display">
        <h2>Queue:</h2>
        {queue.length > 0 ? (
          <ol>
            {queue.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <p>The queue is empty</p>
        )}
      </div>
    </div>
  );
};

export default App;



