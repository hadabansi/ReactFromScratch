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
import UseMemoDemo from './HookComponent/UseMemoDemo';
import UseRefDemo from './HookComponent/UseRefDemo';
import UseRefDemo2 from './HookComponent/UseRefDemo2';
import yourImage from './components/redux.png';
import reduxp from './components/reduxp.png';
import reduxp1 from './components/reduxp1.png';
import reduxp2 from './components/reduxp2.png';
import reduxp3 from './components/reduxp3.png';
import SimpleInterest from './HookComponent/SimpleInterest';
import ComplexForm from './HookComponent/UseReducerExample';
import ParentCounter from './HookComponent/ParentCounter';
import LogisticDemo8 from './HookComponent/LogisticDemo8';
import LogisticDemo7 from './HookComponent/LogisticDemo7';
import LogisticDemo6 from './HookComponent/LogisticDemo6';
import LogisticDemo5 from './HookComponent/LogisticDemo5';
import LogisticDemo4 from './HookComponent/LogisticDemo4';
import LogisticDemo3 from './HookComponent/LogisticDemo3';
import ReduxDemo from './ReduxComponents/cakeDemo/ReduxDemo';
import { Provider } from 'react-redux';
import store from './ReduxComponents/Store';
import ReduxHookDemo from './ReduxComponents/cakeDemo/ReduxHookDemo';
import ReduxDemo2 from './ReduxComponents/IceCreamDemo/ReduxDemo2';
import PayloadDemo from './ReduxComponents/IceCreamDemo/PayloadDemo';
import UserContainer from './ReduxComponents/AsyncDemo/UserContainer';
import CakeView from './ReduxToolkitComponent/features/cake/CakeView';
import IceCreamView from './ReduxToolkitComponent/features/icecream/IceCreamView';
import UserView from './ReduxToolkitComponent/features/user/UserView';
import Parent from './ReduxToolkitComponent/features/demo/Parent';
import Login from './authentication/Login';
import {useEffect} from 'react';
import axios from 'axios';
import PrivateRoute from './authentication/PrivateRoute';
import Logout from './authentication/Logout';
// import store from './ReduxToolkitComponent/app/store';
function App() {
  useEffect(()=>{
    axios.get('http://localhost:8081/',{ withCredentials: true }).then(res=>{
       console.log('Response from server:', res.data);
    })
  },[])
  return (
    <div className="App">
      <Provider store={store}>
      <Router> 
      <Routes>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/logout" exact element={<Logout/>}/>
       <Route
            path="/*"
            element={
              <PrivateRoute element={<>
                <Sidenav/>
                <Routes>
                  <Route path="/" element={<Newcomponent />} />
                  <Route path="/class" element={<Secondcomponent />} />
                  <Route path="/jsx" element={<ConceptJSX />} />
                  <Route path="/props" exact element={<> 
                  <h2>What is props?<br/></h2>
                  <h3>=&gt;Props is just an object that contains the attributes and their values which have been pass from The Parent Component</h3><br/>
                  <h1>Props Data</h1><ConceptProps name="BANSI"/>
                  <ConceptProps name="Akash"/>
                  </>} />
                  <Route path="/multipleprops" exact element={<><ConceptMultipleProps name="Bansi" surname="Hada"/></>}/>
                  <Route path="/childprops" exact element={<><ConceptChildProps name="Bansi">
                   <h3>I am Childern Props</h3>
                    </ConceptChildProps></>} />
                    <Route path="/classprops" exact element={<ClassProps name="Diana"/>}/>
                    <Route path="/whatstate" exact element={<WhatState/>} />
                    <Route path="/stateinclass" exact element={<ConceptStateClass/>}  />
                    <Route path="/Counter" exact element={<Counterusingstate/>}  />
                    <Route path="/destructringFC" exact element={<ConceptDestructringinFunctComp name="Logistic from Function Component"/>}  />
                    <Route path="/destructringCC" exact element={<ConceptDestructringinClassComp name="Logistic from Class Component"/>}  />
                    <Route path="/methodasprops" exact element={<ConceptMethodAsProps/>}  />
                    <Route path="/conditionalrendering" exact element={<ConditionalRendering/>}  />
                    <Route path="/listrendering" exact element={<ListRendering/>}  />
                    <Route path="/formhandling" exact element={<BasicFormHandling/>}  />
                    <Route path="/life_cycle_method" exact element={<LifeCycleMthods/>}  />
                    <Route path="/mounting_method" exact element={<MountingMethod/>}  />
                    <Route path="/update_method" exact element={<UpdateMethod/>}  />
                    <Route path="/unmount_method" exact element={<Unmountmethod/>}  />
                    <Route path="/ErrorHandling_method" exact element={<ErrorHandling/>}  />
                    
                    <Route path="/PureComponent" exact element={<Purecomponent/>}  /> 
                    <Route path="/Refdemo" exact element={<RefDemo/>}  />
                    <Route path="/Refdemo2" exact element={<ForwardRef/>}  />
                    <Route path="/ErrorBoundry" exact element={<>
                    <ErrorBoundry><Company com="Logistic"/></ErrorBoundry>
                    <ErrorBoundry><Company com="Infotech"/></ErrorBoundry>
                    <ErrorBoundry><Company com="Improvised"/></ErrorBoundry>
                    </>}  />
                    <Route path="/higherordercomponent" exact element={
                    <>
                    <HocDemo1 name="vishvas"/>
                    <HocDemo2/>
                    </>}  />
                    <Route path="/ContextDemo" exact element={<ContextDemo/>}  />
                    <Route path="/DemoUseState" exact element={<DemoUseState/>}  />
                    <Route path="/Demo2UseState" exact element={<Demo2UseState/>}  />
                    <Route path="/UseStateObject" exact element={<ObjectPassUseState/>}  />
                    <Route path="/UseStateArray" exact element={<ArrayPassUseState/>}  />
                    <Route path="/DemoUseEffect" exact element={<DemoUseEffect/>}  />
                    <Route path="/ComparisonCount" exact element={<ComparisonCount/>}  />
                    <Route path="/ConditionalyrunEffect" exact element={<ConditionalRunUseEffect/>}  />
                    <Route path="/CleanupinUseEffect" exact element={<UnmountInUseEffect/>}  />
                    <Route path="/DemoUseContext" exact element={<DemoUseContext/>}  />
                    <Route path="/DemoUseReducer" exact element={<DemoUseReducer/>}  />
                    <Route path="/Demo2UseReducer" exact element={<Demo2UseReducer/>}  />
                    <Route path="/Demo3UseReducer" exact element={<Demo3UseReducer/>}  />
                    <Route path="/Demo4UseReducer" exact element={<GlobalStateManagement/>}  />
                    <Route path="/DemoUseCallback" exact element={<ParentComponent/>}  />
                    <Route path="/DemoUseMemo" exact element={<UseMemoDemo/>}  />
                    <Route path="/DemoUseRef" exact element={<UseRefDemo/>}  />
                    <Route path="/Demo2UseRef" exact element={<UseRefDemo2/>}  />
                    <Route path="/Redux" exact element={<>
                    <img src={yourImage} alt="Hello"></img>
                    <img src={reduxp} alt="Hello"></img>
                    <img src={reduxp1} alt="Hello"></img>
                    <img src={reduxp2} alt="Hello"></img>
                    <img src={reduxp3} alt="Hello"></img>
                    </>}  />
                    <Route path="/SimpleInterest" exact element={<SimpleInterest/>} />
                    <Route path="/FormHandlingdemo" exact element={<ComplexForm/>}  />
                    <Route path="/ChildParentProps" exact element={<ParentCounter/>}  />
                    <Route path="/LogisticDemo8" exact element={<LogisticDemo8/>}  />
                    <Route path="/LogisticDemo7" exact element={<LogisticDemo7/>}  />
                    <Route path="/LogisticDemo6" exact element={<LogisticDemo6/>}  />
                    <Route path="/LogisticDemo5" exact element={<LogisticDemo5/>}  />
                    <Route path="/LogisticDemo4" exact element={<LogisticDemo4/>}  />
                    <Route path="/LogisticDemo3" exact element={<LogisticDemo3/>}  />
                    <Route path="/ReduxDemo" exact element={<ReduxDemo/>}  />
                    <Route path="/ReduxHookDemo" exact element={<ReduxHookDemo/>}  />
                    <Route path="/ReduxDemo2" exact element={<ReduxDemo2/>}  />
                    <Route path="/PayloadDemo" exact element={<PayloadDemo/>}  />
                    <Route path="/AsyncDemo" exact element={<UserContainer/>}  />
                    <Route path="/ReduxToolkitDemoCake" exact element={<CakeView/>}  />
                    <Route path="/ReduxToolkitDemoIceCream" exact element={<IceCreamView/>}  />
                    <Route path="/ReduxToolkitDemoAsync" exact element={<UserView/>}  />
                    <Route path="/ReduxToolkitParentChild" exact element={<Parent/>}  />
                </Routes>
              </>} />}/>
      </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;

