import { h, render } from 'preact-cycle';
import Papa from 'papaparse';

function init() {
  if (!localStorage) {
    alert('No localStorage!!!! new key will not be saved!');
  }
  else {
  }
}


const {
  INIT 
} = {
  INIT: (_, mutation) => {
    _.inited = true;
    _.mutation = mutation;
  }
};

const INIT_GUI = ({}, {inited, mutation}) => inited ? <GUI /> : mutation(INIT)(mutation);

const GUI = () => (
  <gui>
  </gui>
);

render(
  INIT_GUI, {
  }, document.body
);
