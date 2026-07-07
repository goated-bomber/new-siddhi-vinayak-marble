import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <AppRoutes />
      <Analytics />
    </div>
  );
}

export default App;