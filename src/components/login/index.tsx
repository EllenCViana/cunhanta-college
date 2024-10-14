import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Alterado para `next/navigation` para `useRouter` no Next.js 13+
import { signIn } from '@/src/services/authService';
import { Container, Form, Title, Input, Button, ErrorMessage } from './style'; // Importa os estilos do arquivo separado

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      await signIn(email, password);
      router.push('/'); // Redireciona para a página principal após o login
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas informações e tente novamente.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <Button type="submit">Entrar</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default Login;
