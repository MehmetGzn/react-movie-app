import AuthContextProvider from './context/AuthContextProvider';
import AppRoutter from './Router/AppRoutter';

function App() {
  return (
    <AuthContextProvider className="App">
      <AppRoutter />
    </AuthContextProvider>
  );
}

export default App;
