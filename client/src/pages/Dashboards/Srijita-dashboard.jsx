
import React from 'react'
import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import Intro from '../SrijitaReactTopics/Intro';
import JSX from '../SrijitaReactTopics/JSX';
import Components from '../SrijitaReactTopics/Components';
import SriNavbar from '../../srijita-components/SriNavbar';
import SriSidebar from '../../srijita-components/SriSidebar';
import FolderStructure from '../SrijitaReactTopics/Folder';
import TailwindSetup from '../SrijitaReactTopics/TailwindSetup';
import ExportsInReact from '../SrijitaReactTopics/ExportsInReact';
import BuildTools from '../SrijitaReactTopics/Buildtools';
import Props from '../SrijitaReactTopics/Props';
import Events from '../SrijitaReactTopics/Events';
import ConditionalRendering from '../SrijitaReactTopics/ConditionalRendering';
import Lists from '../SrijitaReactTopics/Lists';


const Srijita= () => {
  const { stack } = useParams();

  const getRoutes=()=>{
    if(stack==='react'){
      return(
        <>
          <Route path='intro' element={<Intro/>}/>
          <Route path='folder' element={<FolderStructure/>}/>
          <Route path='tailwind' element={<TailwindSetup/>}/>
          <Route path='jsx' element={<JSX/>}/>
          <Route path='components' element={<Components/>}/>
          <Route path='exports' element={<ExportsInReact/>}/>
          <Route path='buildtools' element={<BuildTools/>}/>
          <Route path='props' element={<Props/>}/>
          <Route path='events' element={<Events/>}/>
          <Route path='conditional-rendering' element={<ConditionalRendering/>}/>
          <Route path='lists' element={<Lists/>}/>
        </>
      )
    }
    if (stack === 'express') {
    return (
      <>
        <Route path="intro" element={<div>Express Intro Page</div>} />
        <Route path="middleware" element={<div>Express Middleware</div>} />
        <Route path="routing" element={<div>Express Routing</div>} />
        <Route path="error-handling" element={<div>Express Error Handling</div>} />
        <Route path="*" element={<Navigate to="intro" />} />
      </>
        );
      }
    if (stack === 'node') {
    return (
      <>
        <Route path="intro" element={<div>Node.js Intro Page</div>} />
        <Route path="fs" element={<div>Node.js File System</div>} />
        <Route path="events" element={<div>Node.js Events</div>} />
        <Route path="http" element={<div>Node.js HTTP Module</div>} />
        <Route path="*" element={<Navigate to="intro" />} />
      </>
      );
    }  

     if (stack === 'mongodb') {
    return (
      <>
        <Route path="intro" element={<div>MongoDB Intro Page</div>} />
        <Route path="crud" element={<div>MongoDB CRUD Operations</div>} />
        <Route path="schema" element={<div>MongoDB Schema Design</div>} />
        <Route path="aggregation" element={<div>MongoDB Aggregation</div>} />
        <Route path="*" element={<Navigate to="intro" />} />
      </>
    );
  }
  }


  return (
    <div className="h-screen flex flex-col">
      <SriNavbar />
      <div className="flex flex-1">
        <SriSidebar stack={stack} />
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>{getRoutes()}</Routes>
        </div>
      </div>
    </div>
  );
}

export default Srijita