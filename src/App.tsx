import { RoutesPath } from "@/routes";
import { Navbar } from "@/components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-22">
        <RoutesPath />
      </main>
    </div>
  );
}

export default App;
