import React, { useReducer } from 'react';

export function MyReducedState<T, U>(initialState: T) {
  const MyReducerContext = React.createContext<[T, React.Dispatch<U>]>([initialState, () => initialState]);
  const MyReducerContextProvider = ({ reducer, children }: { reducer: React.Reducer<T, U>, children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <MyReducerContext.Provider value={[state, dispatch]}>
        {children}
      </MyReducerContext.Provider>
    );
  };
  return { MyReducerContext, MyReducerContextProvider };
}