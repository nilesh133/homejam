import React from 'react';
import Front from './components/Front';
import Shows from './components/Shows';
import Review from "./components/Review"
import "./main.scss";
const App = () => {
  return (
    <div style={{ backgroundColor: "#0A0B1A" }}>
      <Front />
      <Shows />
      <Review />
    </div>
  );
};

export default App;
