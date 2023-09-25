import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className="sidenav">
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
    <Link>Hooks</Link>
    <Link to="/DemoUseState">UseState Hook Demo</Link>
    <Link to="/Demo2UseState">UseState Hook Demo2 prevCount</Link>
    <Link to="/UseStateObject">UseState Hook Passing Object</Link>
    <Link to="/UseStateArray">UseState Hook Passing Array</Link>
    {/* Add more navigation links as needed */}
  </div>
  )
}

export default Sidenav