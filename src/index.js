import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './Resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Resume 
        author={ { name: 'Dan', avatarUrl: 'https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg'} }
    />, 
    document.getElementById('root'));
registerServiceWorker();
