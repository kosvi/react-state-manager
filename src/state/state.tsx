import React, { useState } from 'react';

export function MyState<T>(initialState: T) {
  const MyContext = React.createContext<[T, React.Dispatch<React.SetStateAction<T>>]>([initialState, () => initialState]);
  const MyContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [s, setS] = useState<T>(initialState);
    return (
      <MyContext.Provider value={[s, setS]}>
        {children}
      </MyContext.Provider>
    )
  }

  return { MyContext, MyContextProvider }
}
