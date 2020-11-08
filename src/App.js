import React from 'react';
import Timer from './Timer/Timer';
import Navbar from './Navbar';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';

import {BrowserRouter, Route} from "react-router-dom";



const App = () => {

  return (
    <BrowserRouter>
<div>
<Navbar />
<Timer />
<Route path='/monday' component={Monday}/>
<Route path='/tuesday' component={Tuesday}/>
<Route path='/wednesday' component={Wednesday}/>
<Route path='/thursday' component={Thursday}/>
<Route path='/friday' component={Friday}/>
</div>
    </BrowserRouter>

  )
}

export default App