import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Recomendation } from "./pages/recomendationsPage";
import { ModeProvider } from "./contexts/ModeContext";
import { Plans } from "./pages/planPage";
import { Information } from "./pages/information";
import "./app.css";


const App: FC = () => {
  return (
    <>
      <ModeProvider>
        <Presentation />
        <Recomendation />
        <Plans />
        <Information />
      </ModeProvider>
    </>
  )
}

export default App
