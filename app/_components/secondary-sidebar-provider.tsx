"use client";

import * as React from "react";

type SecondarySidebarContextProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  setOpen: (open: boolean) => void;
};

const SecondarySidebarContext =
  React.createContext<SecondarySidebarContextProps | null>(null);

export function useSecondarySidebar() {
  const context = React.useContext(SecondarySidebarContext);
  if (!context) {
    throw new Error(
      "useSecondarySidebar must be used within a SecondarySidebarProvider."
    );
  }
  return context;
}

export function SecondarySidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const setOpen = React.useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const contextValue = React.useMemo<SecondarySidebarContextProps>(
    () => ({
      isOpen,
      toggleSidebar,
      setOpen,
    }),
    [isOpen, toggleSidebar, setOpen]
  );

  return (
    <SecondarySidebarContext.Provider value={contextValue}>
      {children}
    </SecondarySidebarContext.Provider>
  );
}
