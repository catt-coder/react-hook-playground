import { Hooks } from "./data/hooks";
import "./App.css";

const HookDashboard = () => (
  <>
    {Hooks.map((hook) => (
      <div className="card" key={hook.title}>
        <h3>{hook.title}</h3>
        <p className="desc">{hook.desc}</p>
        <hook.component />
      </div>
    ))}
  </>
);

function App() {
  return (
    <div className="container dashboard-container">
      <HookDashboard />
    </div>
  );
}

export default App;
