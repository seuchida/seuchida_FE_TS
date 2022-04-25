import React from 'react';

type GreetingsProps = {
  name: string;
};

const Login: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Login;