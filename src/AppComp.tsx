import React from 'react';
import './App.css';

export interface AppCompProps {
  message: string;
  seconds: number;
  onShowSeconds: () => void;
}

export const AppComp: React.FC<AppCompProps> = ({ message, seconds, onShowSeconds }: AppCompProps) => {
  return (
    <div className="App">
    Message: {message}
    <br/>
    Seconds: {seconds}
    <br/>
    <button onClick={onShowSeconds}>Click Me</button>
    </div>
  );
}

//export default AppComp;
