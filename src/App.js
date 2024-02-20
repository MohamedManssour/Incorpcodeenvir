import React from 'react';
import './App.css';
import CodeEditor from './MonacoEditor';

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Files</h2>
        <ul>
          <li>index.js</li>
          <li>App.js</li>
          <li>style.css</li>
        </ul>
      </aside>
      <main className="editor-container">
        <CodeEditor />
      </main>
      <aside className="user-chat-container">
        <section className="user-list">
          <h2>Users</h2>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
          </ul>
        </section>
        <section className="chat">
          <h2>Chat</h2>
          <div className="chat-messages">
            {/* Chat messages will go here */}
          </div>
          <input type="text" placeholder="Type a message..." />
        </section>
      </aside>
    </div>
  );
}

export default App;
