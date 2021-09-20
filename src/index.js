import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
if(document.getElementsByTagName('footer')[0].offsetWidth < 990) {
  const x = document.querySelectorAll('.show-img-img');
  for(let i=0;i<x.length;i++) {
      let s = x[i].getAttribute('src');
      s = s.replace('desktop','mobile');
      x[i].setAttribute('src',s);
  }
}
function cback() {
  document.getElementsByClassName('hero')[0].classList.toggle('active');
}
document.getElementsByClassName('hamburger')[0].addEventListener('click',cback);
document.getElementsByClassName('mobile-icon-close')[0].addEventListener('click',cback);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
