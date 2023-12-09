import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlockContexProvider } from "./context/blockContext";
import CodeBlockPage from './pages/CodeBlockPage';
import Lobby from './pages/Lobby';
import "./styles.scss"

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Lobby /> },
    { path: "/code/:id", element: <CodeBlockPage /> }
  ])

  return (
    <div className="app">
      <BlockContexProvider>
        <RouterProvider router={router}/>
      </BlockContexProvider>   
    </div>
  );
}

export default App;
