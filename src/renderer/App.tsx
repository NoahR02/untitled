import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function Home() {
  return (
    <div className="w-[100%] h-[100%]">
      
      <ResizablePanelGroup direction="horizontal">
      
      <ResizablePanel defaultSize={25} className="w-[30%] bg-gray-200">
        <ul className="p-5">
          <li className='w-[100%] bg-neutral-800 text-white rounded p-2 pl-4'>Test.txt</li>
        </ul>
      </ResizablePanel>
      
      <ResizableHandle />
      
      <ResizablePanel className="flex flex-col items-center justify-center">
        <Card className="max-w-[400px]">
        <CardHeader className="min-w-40 text-center">
          <CardTitle>Hi!</CardTitle>
        </CardHeader>
        </Card>
      </ResizablePanel>

    </ResizablePanelGroup>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
