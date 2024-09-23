import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Stack } from "./pages/StackPage";
import { ModeProvider } from "./contexts/ModeContext";
import { Diferencial } from "./pages/diferencialPage";
import "./app.css";


const App: FC = () => {
  return (
    <>
      <ModeProvider>
        <Presentation />
        <Diferencial />
        <Stack />
      </ModeProvider>
    </>
  )
}

export default App
