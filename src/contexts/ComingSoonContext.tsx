import { createContext, useContext, useState, type ReactNode } from "react";

interface ComingSoonContextType {
  openComingSoon: () => void;
  closeComingSoon: () => void;
  isOpen: boolean;
}

const ComingSoonContext = createContext<ComingSoonContextType | undefined>(
  undefined
);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openComingSoon = () => setIsOpen(true);
  const closeComingSoon = () => setIsOpen(false);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon, closeComingSoon, isOpen }}>
      {children}
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const context = useContext(ComingSoonContext);
  if (context === undefined) {
    throw new Error("useComingSoon must be used within a ComingSoonProvider");
  }
  return context;
}

