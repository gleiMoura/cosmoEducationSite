import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Stack } from "./pages/StackPage";
import { Portfolio } from "./pages/PortfolioPage";
import { ModeProvider } from "./contexts/ModeContext";
import "./app.css";


const App: FC = () => {
  return (
    <>
      <ModeProvider>
        <Presentation />
        <Stack />
        <Portfolio />
      </ModeProvider>
    </>
  )
}

export default App
