import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Recomendation } from "./pages/recomendationsPage";
import { ModeProvider } from "./contexts/ModeContext";
import { Plans } from "./pages/planPage";
import "./app.css";


const App: FC = () => {
  return (
    <>
      <ModeProvider>
        <Presentation />
        <Recomendation />
        <Plans />
      </ModeProvider>
    </>
  )
}

export default App
