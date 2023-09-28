import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className="sidenav">
    <Link><h3>React Concept Basic To Advanced</h3></Link>
    <Link to="/">Function Component</Link>
    <Link to="/class">Class Component</Link>
    <Link to="/jsx">What is JSX?</Link>
    <Link to="/props">Component With Props</Link>
    <Link to="/multipleprops">Component With Multi Props</Link>
    <Link to="/childprops">Component With Multi Props</Link>
    <Link to="/classprops">Props in Class</Link>
    <Link to="/whatstate">Props Vs State</Link>
    <Link to="/stateinclass">State In Class</Link>
    <Link to="/counter">Counter Using State</Link>
    <Link to="/destructringFC">Destructring in Function Component</Link>
    <Link to="/destructringCC">Destructring in Class Component</Link>
    <Link to="/methodasprops">Passing Method As Props</Link>
    <Link to="/conditionalrendering">4 Methos Of Conditional Rendering</Link>
    <Link to="/listrendering">List Rendering</Link>
    <Link to="/formhandling">Form Handling</Link>
    <Link to="/life_cycle_method">LifeCycles Method</Link>
    <Link to="/mounting_method">Mounting Method</Link>
    <Link to="/update_method">Update Method</Link>
    <Link to="/unmount_method">UnMounting Method</Link>
    <Link to="/ErrorHandling_method">ErrorHandling Method</Link>
    <Link to="/PureComponent">Pure Component</Link>
    <Link to="/Refdemo">Ref Demo</Link>
    <Link to="/Refdemo2">ForwardRef Demo</Link>
    <Link to="/ErrorBoundry">ErrorBoundry</Link>
    <Link to="/higherordercomponent">Higher Order component</Link>
    <Link to="/ContextDemo">Context</Link>
    <Link><h3>Hooks</h3></Link>
    <Link to="/SimpleInterest">Use Effect Simple Interest</Link>
    {/* <Link to="/FormHandlingdemo">UseReducer Form</Link> */}
    <Link to="/DemoUseState">UseState Hook Demo</Link>
    <Link to="/Demo2UseState">UseState Hook Demo2 prevCount</Link>
    <Link to="/UseStateObject">UseState Hook Passing Object</Link>
    <Link to="/UseStateArray">UseState Hook Passing Array</Link>
    <Link to="/DemoUseEffect">UseEffect Hook Demo</Link>
    <Link to="/ComparisonCount">Counter in Class</Link>
    <Link to="/ConditionalyrunEffect">Conditionally Run useEffect</Link>
    <Link to="/CleanupinUseEffect">Unmount in UseEffect</Link>
    <Link to="/DemoUseContext">UseContext Hook Demo</Link>
    <Link to="/DemoUseReducer">useReducer Hook Simple State and Action</Link>
    <Link to="/Demo2UseReducer">useReducer Hook Complex State and Action </Link>
    <Link to="/Demo3UseReducer">Multiple useReducers</Link>
    <Link to="/DemoUseCallback">UseCallback Hook Demo</Link>
    <Link to="/DemoUseMemo">UseMemo Hook Demo</Link>
    <Link to="/DemoUseRef">UseRef Hook Demo</Link>
    <Link to="/Demo2UseRef">UseRef Hook Demo2</Link>
    <Link><h3>Redux</h3></Link>
    <Link to="/Redux">Three Core Concept of Redux</Link>
    <Link><h3>Logistic Demo</h3></Link>
    <Link to="/ChildParentProps">Child and Parent Counter</Link>
   
    {/* Add more navigation links as needed */}
  </div>
  )
}

export default Sidenav