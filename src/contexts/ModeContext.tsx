import { createContext, FC, ReactNode, useState } from "react";

interface ModeContextType {
    mode: boolean;
    setMode: (mode: boolean) => void;
};

export const ModeContext = createContext<ModeContextType>({
    mode: false,
    setMode: () => {}
});

export const ModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState(false);

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    )
};