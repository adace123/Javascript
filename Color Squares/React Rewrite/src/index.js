import React from 'react';
import ReactDOM from 'react-dom';
import BoxGrid  from './components/BoxGrid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BoxGrid />, document.getElementById('root'));
registerServiceWorker();
