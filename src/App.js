import React from 'react';

import Authentification from './components/Authentification'; // Assurez-vous du chemin correct
import Quiz from './components/quiz'; // Assurez-vous du chemin correct
import { Route, Router, Routes } from 'react-router-dom/dist';
import Infos from './components/infos';
import Mongo from './components/Mongo';
import Mysql from './components/Mysql';
import Uml from './components/Uml';
import Approche from './components/Approche';
import Python from './components/Python';

function App() {
  return (


    <div>
      <Routes>
        <Route path="" element={<Authentification />} />
         <Route path="/quiz" element={<Quiz />} /> 
         <Route path='/Infos' element={<Infos/>}/>
         <Route path='/Mongo' element={<Mongo/>}/>
         <Route path='/Mysql' element={<Mysql/>}/>
         <Route path='/Uml' element={<Uml/>}/>
         <Route path='/Approche' element={<Approche/>}/>
         <Route path='/Python' element={<Python/>}/>
      </Routes>
    </div>





  );
}

export default App;
