import React from 'react';
import { View } from 'react-native';
import dva from 'dva';
// import { registerModels } from './models'
// import Router from './Router';

// 1. Initialize
const app = dva();

// 2. Model
// registerModels(app)

// 3. Router

const App = app.start(<View/>);

// 4. Start
export default App;
