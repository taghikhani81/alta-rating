import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import AltaRating from './AltaRating';



//////////////////////////////////////////////////////////////////

class ReactElement extends HTMLElement {

  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount(); 
  }

  getValue(){
    return this.getAttribute('value');
  }

  setValue(value){
    this.setAttribute('value', value);
  }

  mount() {
    const props = {};

    for(let i =0; i < this.attributes['length']; i++){

      if(this.attributes[i].name === 'value'){
        props.value = Number(this.attributes[i].textContent);
      }

      if(this.attributes[i].name === 'number'){
        props.number = Number(this.attributes[i].textContent);
      }
      
      if(this.attributes[i].name === 'rating-class'){
        props.ratingClass = this.attributes[i].textContent;
      }

      if(this.attributes[i].name === 'rating-id'){
        props.ratingId = this.attributes[i].textContent;
      }

      if(this.attributes[i].name === 'rating-type'){
        props.ratingType = this.attributes[i].textContent;
      }

      if(this.attributes[i].name === 'options'){
        props.options = JSON.parse(this.attributes[i].textContent);
      }

      if(this.attributes[i].name === 'is-disabled'){
        props.isDisabled = (this.attributes[i].textContent) === 'true' ? true : false;
      }

      if(this.attributes[i].name === 'callback'){
        props.callback = eval(this.attributes[i].textContent);
        // console.log(typeof eval(this.attributes[i].textContent));
      }

      
    }

    render(<AltaRating {...props} />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  parseHtmlToReact(html) {
    return html;
  }

  getProps(attributes) {
    return [...attributes]
      .filter(attr => attr.name !== 'style')
      .map(attr => this.convert(attr.name, attr.value))
      .reduce((props, prop) =>
        ({ ...props, [prop.name]: prop.value }), {});
  }

  getEvents() {
    return Object.values(this.attributes)
      .filter(key => /on([a-z].*)/.exec(key.name))
      .reduce((events, ev) => ({
        ...events,
        [ev.name]: args =>
          this.dispatchEvent(new CustomEvent(ev.name, { ...args }))
      }), {});
  }

  convert(attrName, attrValue) {
    let value = attrValue;
    if (attrValue === 'true' || attrValue === 'false')
      value = attrValue === 'true';
    else if (!isNaN(attrValue) && attrValue !== '')
      value = +attrValue;
    else if (/^{.*}/.exec(attrValue))
      value = JSON.parse(attrValue);
    return {
      name: attrName,
      value: value
    };
  }

}

customElements.define('alta-rating', ReactElement);

//////////////////////////////////////////////////////////////////


let YourOptions1 = {
  backgroundOpacity: 0.5,
  hoverOpacity: 0.7,
  emojisArray: ['yellow star']
}

let YourOptions2 = {
  backgroundOpacity: 0.5,
  hoverOpacity: 0.7,
  imageSources: ['./img/example.png']
}

let YourOptions3 = {
  backgroundBarColor: 'lightgray',
  selectedBarColor: 'black',
  hoverBarColor: 'gray',
  barWidth: '10px'
}

let YourOptions4 = {
  emojisArray: ['mouthless', 'pouting', 'angry', 'pensive', 'sad', 'neutral', 'smiling', 'heart-shaped eyes', 'star-shaped eyes']
}

let YourOptions5 = {
  backgroundBarColor: 'lightgreen',
  selectedBarColor: 'darkgreen',
  hoverBarColor: 'green',
}

let YourOptions6 = {
  emojisArray: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  backgroundEmoji: 'blue square'
}

let YourOptions7 = {
  emojisArray: ['green check button'],
  backgroundEmoji: 'check button'
}

let YourOptions8 = {
  emojisArray: ['thumbs up'],
  backgroundEmoji: 'thumbs down'
}

let YourOptions9 = {
  backgroundOpacity: 0.4,
  emojisArray: ['red heart']
}

let YourOptions10 = {
  backgroundBarColor: 'lightgreen',
  selectedBarColor: 'darkgreen',
  hoverBarColor: 'green',
}



ReactDOM.render(
  <React.StrictMode>

    <AltaRating number={5} value={2}  options={YourOptions1} ratingType='emoji' callback={(value) => {console.log(value)}}/>
    <AltaRating number={5} value={1} ratingId="rating2" ratingClass="rating2" options={YourOptions2} ratingType='image' />
    <AltaRating number={50} value={1} ratingClass="rating3" options={YourOptions3} ratingType='bar' />
    <AltaRating value={1} ratingClass="rating4" options={YourOptions4} ratingType='emoji' />
    <AltaRating number={50} value={1} ratingClass="rating5" options={YourOptions5} ratingType='bar' />
    <AltaRating value={1} ratingClass="rating6" options={YourOptions6} ratingType='emoji' />
    <AltaRating number={7} value={2} ratingClass="rating7" options={YourOptions7} ratingType='emoji' />
    <AltaRating number={3} value={2} ratingClass="rating8" options={YourOptions8} ratingType='emoji'/>
    <AltaRating number={1} value={1} ratingClass="rating9" options={YourOptions9} ratingType='emoji'/>
    <AltaRating number={50} value={1} ratingClass="rating10" options={YourOptions10} ratingType='bar' />

  </React.StrictMode>,
  document.getElementById('root')
);


