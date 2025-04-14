import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../styles/LoginForm.css';

const LoginForm = ({ onLogin, isRegistering }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      alert('Erro ao registrar: ' + error.message);
    }
  };

  return (
    <form
      onSubmit={isRegistering ? handleRegister : handleLogin}
      style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '20px auto' }}
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ marginBottom: '10px', padding: '10px' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        style={{ marginBottom: '10px', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px', marginBottom: '10px' }}>
        {isRegistering ? 'Registrar' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;