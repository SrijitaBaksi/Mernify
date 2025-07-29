import Sidebar from "../../Ananta-Components/Sidebar";
import Navbar from "../../Ananta-Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Introduction from "../../AnantaContent/AnantaReact/Introduction";
import UseState from "../../AnantaContent/AnantaReact/Hooks/UseState";
import UseEffect from "../../AnantaContent/AnantaReact/Hooks/UseEffect";
import { useState } from "react";
import RenderHTML from "../../AnantaContent/AnantaReact/RenderHTML";
import ReactComponents from "../../AnantaContent/AnantaReact/ReactComponents";
import ReactProps from "../../AnantaContent/AnantaReact/ReactProps";
import ReactEvents from "../../AnantaContent/AnantaReact/ReactEvents";
import ReactConditional from "../../AnantaContent/AnantaReact/ReactConditional";
import ReactLists from "../../AnantaContent/AnantaReact/ReactLists";
import ReactRouter from "../../AnantaContent/AnantaReact/ReactRouter";
import ReactMemo from "../../AnantaContent/AnantaReact/ReactMemo";
import ConnectTailwind from "../../AnantaContent/AnantaReact/ConnectTailwind";
import ClassComponents from "../../AnantaContent/AnantaReact/ClassComponents";
import DefineHooks from "../../AnantaContent/AnantaReact/Hooks/DefineHooks";
import UseContext from "../../AnantaContent/AnantaReact/Hooks/UseContext";
import UseRef from "../../AnantaContent/AnantaReact/Hooks/UseRef";
import UseReducer from "../../AnantaContent/AnantaReact/Hooks/UseReducer";

export default function Ananta(){
  const [selectedTech, setSelectedTech] = useState("React.js")

  return(
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar selectedTech={selectedTech} className="w-full md:w-64 shrink-0"/>
      <div className="flex flex-col flex-1">
        <Navbar selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
        <div className="px-4 py-6 md:px-10 md:py-8 overflow-y-auto flex-1">
          <Routes>
            {/* Reactjs routes */}
            <Route path="/" element={<Introduction/>}/>
            <Route path="introduction" element={<Introduction/>} />
            <Route path="connectTailwind" element={<ConnectTailwind/>}/>
            <Route path="renderHtml" element={<RenderHTML/>}/>
            <Route path="classComponents" element={<ClassComponents/>}/>
            <Route path="reactComponents" element={<ReactComponents/>}/>
            <Route path="reactProps" element={<ReactProps/>}/>
            <Route path="reactEvents" element={<ReactEvents/>}/>
            <Route path="reactConditionals" element={<ReactConditional/>}/>
            <Route path="reactLists" element={<ReactLists/>}/>
            <Route path="reactRouter" element={<ReactRouter/>}/>
            <Route path="reactMemo" element={<ReactMemo/>}/>

            <Route path="hooks/hooksDefine" element={<DefineHooks/>}/>
            <Route path="hooks/useState" element={<UseState />} />
            <Route path="hooks/useEffect" element={<UseEffect/>}/>
            <Route path="hooks/useContext" element={<UseContext/>}/>
            <Route path="hooks/useRef" element={<UseRef/>}/>
            <Route path="hooks/useReducer" element={<UseReducer/>}/>
            {/* <Route path="hooks/useEffect" element={<UseEffect />} />
            <Route path="hooks/useContext" element={<UseContext />} /> */}


            
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}