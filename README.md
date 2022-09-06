# React state manager

This is a simple state manager. It provides state and state dispatcher as context to all child components. 

## Install

```shell
npm install react-state-manager
```

## Usage

To create a ContextProvider, use the following example: 

```typescript
import { MyState } from 'react-state-manger';

interface UserState {
  uid: string,
  name: string
}

const initialState: UserState = {
  uid: '',
  name: ''
};

export const { MyContext: UserContext, MyContextProvider: UserContextProvider } = MyState<UserState>(initialState);
```

Now you can use `UserContextProvider` to provide `UserState` to all child components. The context also includes a dispatcher to update the context and re-render all components. 

```typescript
<UserContextProvider>
  <YourComponent />
</UserContextProvider>
```

```typescript
function YourComponent() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div onClick={() => setUser({...user, name: 'John Doe'})}>
      {user.name}
    </div>
  );
}
```

## TODO

Add reducer context. 

## Author

[Ville Koskela](https://github.com/kosvi)
