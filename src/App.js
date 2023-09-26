import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import './components/Sidenav/Sidenav.css';
import Sidenav from './components/Sidenav/Sidenav';
import Newcomponent from './components/Newcomponent';
import Secondcomponent from './components/Secondcomponent';
import ConceptJSX from './components/ConceptJSX';
import ConceptProps from './components/ConceptProps';
import ConceptMultipleProps from './ConceptMultipleProps';
import ConceptChildProps from './components/ConceptChildProps';
import ClassProps from './components/ClassProps';
import WhatState from './components/WhatState';
import ConceptStateClass from './components/ConceptStateClass';
import Counterusingstate from './components/Counterusingstate';
import ConceptDestructringinFunctComp from './components/ConceptDestructringinFunctComp';
import ConceptDestructringinClassComp from './components/ConceptDestructringinClassComp';
import ConceptMethodAsProps from './components/ConceptMethodAsProps';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import BasicFormHandling from './components/BasicFormHandling';
import LifeCycleMthods from './components/LifeCycleMthods';
import MountingMethod from './components/MountingMethod';
import UpdateMethod from './components/UpdateMethod';
import Unmountmethod from './components/Unmountmethod';
import ErrorHandling from './components/ErrorHandling';
import Purecomponent from './components/Purecomponent';
import RefDemo from './components/RefDemo';
import ForwardRef from './components/ForwardRef';
import Company from './components/Company';
import ErrorBoundry from './components/ErrorBoundry';
import HocDemo1 from './components/HocDemo1';
import HocDemo2 from './components/HocDemo2';
import ContextDemo from './components/Context/ContextDemo';
import DemoUseState from './HookComponent/DemoUseState';
import Demo2UseState from './HookComponent/Demo2UseState';
import ObjectPassUseState from './HookComponent/ObjectPassUseState';
import ArrayPassUseState from './HookComponent/ArrayPassUseState';
import DemoUseEffect from './HookComponent/DemoUseEffect';
import ComparisonCount from './components/ComparisonCount';
import ConditionalRunUseEffect from './HookComponent/ConditionalRunUseEffect';
import UnmountInUseEffect from './HookComponent/UnmountInUseEffect';
import DemoUseContext from './HookComponent/ContextHook/DemoUseContext';
import DemoUseReducer from './HookComponent/DemoUseReducer';
import Demo2UseReducer from './HookComponent/Demo2UseReducer';
import Demo3UseReducer from './HookComponent/Demo3UseReducer';
import GlobalStateManagement from './HookComponent/UseReducerWithUseContext/GlobalStateManagement';
import ParentComponent from './HookComponent/UseCallbackDemo/ParentComponent';
function App() {
  return (
    <div className="App">
      <Router>
      <Sidenav />   
      <Routes>
      <Route path="/" exact element={<Newcomponent/>} />
      <Route path="/class" exact element={<Secondcomponent/>} />
      <Route path="/jsx" exact element={<ConceptJSX/>} />
      <Route path="/props" exact element={<> 
      <h2>What is props?<br/></h2>
      <h3>=&gt;Props is just an object that contains the attributes and their values which have been pass from The Parent Component</h3><br/>
       <h1>Props Data</h1><ConceptProps name="BANSI"/>
       <ConceptProps name="Akash"/>
       </>} />
      <Route path="/multipleprops" exact element={<><ConceptMultipleProps name="Bansi" surname="Hada"/></>} />
      <Route path="/childprops" exact element={<><ConceptChildProps name="Bansi">
        <h3>I am Childern Props</h3>
        </ConceptChildProps></>} />
        <Route path="/classprops" exact element={<ClassProps name="Diana"/>} />
        <Route path="/whatstate" exact element={<WhatState/>} />
        <Route path="/stateinclass" exact element={<ConceptStateClass/>} />
        <Route path="/Counter" exact element={<Counterusingstate/>} />
        <Route path="/destructringFC" exact element={<ConceptDestructringinFunctComp name="Logistic from Function Component"/>}/>
        <Route path="/destructringCC" exact element={<ConceptDestructringinClassComp name="Logistic from Class Component"/>}/>
        <Route path="/methodasprops" exact element={<ConceptMethodAsProps/>}/>
        <Route path="/conditionalrendering" exact element={<ConditionalRendering/>}/>
        <Route path="/listrendering" exact element={<ListRendering/>}/>
        <Route path="/formhandling" exact element={<BasicFormHandling/>}/>
        <Route path="/life_cycle_method" exact element={<LifeCycleMthods/>}/>
        <Route path="/mounting_method" exact element={<MountingMethod/>}/>
        <Route path="/update_method" exact element={<UpdateMethod/>}/>
        <Route path="/unmount_method" exact element={<Unmountmethod/>}/>
        <Route path="/ErrorHandling_method" exact element={<ErrorHandling/>}/>
        <Route path="/PureComponent" exact element={<Purecomponent/>}/>  
        <Route path="/Refdemo" exact element={<RefDemo/>}/>
        <Route path="/Refdemo2" exact element={<ForwardRef/>}/>
        <Route path="/ErrorBoundry" exact element={<>
        <ErrorBoundry><Company com="Logistic"/></ErrorBoundry>
        <ErrorBoundry><Company com="Infotech"/></ErrorBoundry>
        <ErrorBoundry><Company com="Improvised"/></ErrorBoundry>
        </>}/>
        <Route path="/higherordercomponent" exact element={
        <>
        <HocDemo1 name="vishvas"/>
        <HocDemo2/>
        </>}/>
        <Route path="/ContextDemo" exact element={<ContextDemo/>}/>
        <Route path="/DemoUseState" exact element={<DemoUseState/>}/>
        <Route path="/Demo2UseState" exact element={<Demo2UseState/>}/>
        <Route path="/UseStateObject" exact element={<ObjectPassUseState/>}/>
        <Route path="/UseStateArray" exact element={<ArrayPassUseState/>}/>
        <Route path="/DemoUseEffect" exact element={<DemoUseEffect/>}/>
        <Route path="/ComparisonCount" exact element={<ComparisonCount/>}/>
        <Route path="/ConditionalyrunEffect" exact element={<ConditionalRunUseEffect/>}/>
        <Route path="/CleanupinUseEffect" exact element={<UnmountInUseEffect/>}/>
        <Route path="/DemoUseContext" exact element={<DemoUseContext/>}/>
        <Route path="/DemoUseReducer" exact element={<DemoUseReducer/>}/>
        <Route path="/Demo2UseReducer" exact element={<Demo2UseReducer/>}/>
        <Route path="/Demo3UseReducer" exact element={<Demo3UseReducer/>}/>
        <Route path="/Demo4UseReducer" exact element={<GlobalStateManagement/>}/>
        <Route path="/DemoUseCallback" exact element={<ParentComponent/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
