import React, { useRef } from 'react';
import sample from './images/sample.png';

import * as htmlToImage from 'html-to-image';

function App() {

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  }

  return (
    <div className="App">
      <button onClick={downloadImage}>Download Image</button>

      <div id='domEl' ref={domEl}>
        <h3>Convert HTML element or document into Image in React</h3>
        <h3><a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
        <img src={sample} width="100" />
      </div>

    </div>
  );
}

export default App;