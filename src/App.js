import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

function App() {
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <Counter />
      <Counter />
      <Stats count={2}/>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
