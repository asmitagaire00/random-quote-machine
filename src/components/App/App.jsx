import 'font-awesome/css/font-awesome.min.css';

import QuoteGenerate from '../QuoteGenerate/QuoteGenerate';
import './App.css';
import { useState } from 'react';
import { colors } from '../../colors';

const App = () => {
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  return (
    <div
      className="app"
      style={{ backgroundColor: color, transition: 'all 0.5s ease-in-out' }}
    >
      <QuoteGenerate color={color} setColor={setColor} />
    </div>
  );
};

export default App;
