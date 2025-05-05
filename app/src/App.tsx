import { lazy } from "react";

const RemoteButton = lazy(() => import("component/Button"));

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 text-xl font-bold">
      <p>Hello From App</p>
      <RemoteButton>Button From Components</RemoteButton>
    </div>
  );
}

export default App;
