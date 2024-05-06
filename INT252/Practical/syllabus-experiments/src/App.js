import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import ToggleContent from './components/ToggleContent';
import EmbeddingImage from './components/EmbeddingImage';
import EmbeddingIcon from './components/EmbeddingIcon';
import DisplayAudioVideo from './components/DisplayAudioVideo';
import ExampleUseStateCounter from './components/ExampleUseStateCounter';
import ExampleUseEffectTimer from './components/ExampleUseEffectTimer';
import PublicAPI from './components/PublicAPI';
import ExampleUseReducerUseStateCounter from './components/ExampleUseReducerUseStateCounter';
import ClassComponentLifecycle from './components/ClassComponentLifecycle';
import FunctionalComponentLifecycle from './components/FunctionalComponentLifecycle';
import ControlledForm from './components/ControlledForm';
import HigherOrderComponent from './components/HigherOrderComponent';
import { ComponentA, ComponentB } from './components/ComponentRenderProps';


function App() {
  return (
    <div className="App">
      <Navbar/> {/* Experiment 1 */}
      
      
      <ToggleContent condition={false} trueContent={<p>This content is visible when the condition is true</p>} falseContent={<p>This content is visible when the content is false</p>}></ToggleContent> {/*Experiment 2*/}
      
      
      <EmbeddingImage></EmbeddingImage> {/*Experiment 3.1*/}
      
      
      <EmbeddingIcon></EmbeddingIcon> {/*Experiment 3.2*/}
      

      <DisplayAudioVideo type="audio" controls/> {/*Experiment 4.1*/}
      
      
      <DisplayAudioVideo type="video" controls/> {/*Experiment 4.2*/}
      
      
      <ExampleUseStateCounter></ExampleUseStateCounter> {/*Experiment 5.1*/}
      
      
      <ExampleUseEffectTimer></ExampleUseEffectTimer> {/*Experiment 5.2*/}
      
      
      <PublicAPI></PublicAPI> {/*Experiment 6*/}
      
      
      <ExampleUseReducerUseStateCounter></ExampleUseReducerUseStateCounter> {/*Experiment 7*/}
      
      
      <ClassComponentLifecycle></ClassComponentLifecycle> {/*Experiment 8.1*/}
      
      
      <FunctionalComponentLifecycle></FunctionalComponentLifecycle> {/*Experiment 8.2*/}
      
      
      <ControlledForm></ControlledForm> {/*Experiment 9*/}
      
      
      <HigherOrderComponent name="world"></HigherOrderComponent> {/*Experiment 10*/}
      
      
      <h2>Component A</h2>  {/*Experiment 11*/}
      <ComponentA render={(sharedFunc) => (<div>{sharedFunc()}</div>)}></ComponentA>
      
      <h2>Component B</h2>
      <ComponentB render={(sharedFunc) => (<div>{sharedFunc()}</div>)}></ComponentB>
    </div>
  );
}

export default App;
