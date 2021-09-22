import { useEffect, useState } from 'react';
import React from 'react';


const allEmojis = [
  { title: 'mouthless', code: '\u{1F636}' },
  { title: 'angry', code: '\u{1F620}' },
  { title: 'pouting', code: '\u{1F621}' },
  { title: 'unamused', code: '\u{1F612}' },
  { title: 'confused', code: '\u{1F615}' },
  { title: 'neutral', code: '\u{1F610}' },
  { title: 'expressionless', code: '\u{1F611}' },
  { title: 'happy', code: '\u{1F600}' },
  { title: 'relieved', code: '\u{1F60C}' },
  { title: 'heart-shaped eyes', code: '\u{1F60D}' },
  { title: 'star-shaped eyes', code: '\u{1F929}' },
  { title: 'smiling', code: '\u{1F60A}' },
  { title: 'laughing', code: '\u{1F602}' },
  { title: 'sad', code: '\u2639\uFE0F' },
  { title: 'pensive', code: '\u{1F614}' },
  { title: 'crying', code: '\u{1F622}' },
  { title: 'loudly crying', code: '\u{1F62D}' },
  { title: 'fearful', code: '\u{1F628}' },
  { title: 'screaming', code: '\u{1F631}' },
  { title: 'flushed', code: '\u{1F633}' },
  { title: 'ok hand', code: '\u{1F44C}' },
  { title: 'clapping hands', code: '\u{1F44F}' },
  { title: 'thumbs up', code: '\u{1F44D}' },
  { title: 'thumbs down', code: '\u{1F44E}' },
  { title: 'yellow star', code: '\u{2B50}' },
  { title: 'glowing star', code: '\u{1F31F}' },
  { title: 'black star', code: '\u{2605}' },
  { title: 'eight-spoked asterisk', code: '\u{2733}' },
  { title: 'six-spoked asterisk', code: '\u{2731}' },
  { title: 'green asterisk', code: '\u2733\uFE0F' },
  { title: 'orange asterisk', code: '\u2734\uFE0F' },
  { title: 'sparkle', code: '\u{2747}' },
  { title: 'green sparkle', code: '\u2747\uFE0F' },
  { title: 'wrapped gift', code: '\u{1F381}' },
  { title: 'gem stone', code: '\u{1F48E}' },
  { title: 'crown', code: '\u{1F451}' },
  { title: 'minus', code: '\u{2796}' },
  { title: 'plus', code: '\u{2795}' },
  { title: 'zero', code: '\u{30}\uFE0F\u20E3' },
  { title: 'one', code: '\u{31}\uFE0F\u20E3' },
  { title: 'two', code: '\u{32}\uFE0F\u20E3' },
  { title: 'three', code: '\u{33}\uFE0F\u20E3' },
  { title: 'four', code: '\u{34}\uFE0F\u20E3' },
  { title: 'five', code: '\u{35}\uFE0F\u20E3' },
  { title: 'six', code: '\u{36}\uFE0F\u20E3' },
  { title: 'seven', code: '\u{37}\uFE0F\u20E3' },
  { title: 'eight', code: '\u{38}\uFE0F\u20E3' },
  { title: 'nine', code: '\u{39}\uFE0F\u20E3' },
  { title: 'ten', code: '\u{1F51F}' },
  { title: 'red circle', code: '\u{1F534}' },
  { title: 'green circle', code: '\u{1F7E2}' },
  { title: 'blue circle', code: '\u{1F535}' },
  { title: 'orange circle', code: '\u{1F7E0}' },
  { title: 'yellow circle', code: '\u{1F7E1}' },
  { title: 'purple circle', code: '\u{1F7E3}' },
  { title: 'brown circle', code: '\u{1F7E4}' },
  { title: 'black circle', code: '\u{26AB}' },
  { title: 'white circle', code: '\u{26AA}' },
  { title: 'red square', code: '\u{1F7E5}' },
  { title: 'green square', code: '\u{1F7E9}' },
  { title: 'blue square', code: '\u{1F7E6}' },
  { title: 'orange square', code: '\u{1F7E7}' },
  { title: 'yellow square', code: '\u{1F7E8}' },
  { title: 'purple square', code: '\u{1F7EA}' },
  { title: 'brown square', code: '\u{1F7EB}' },
  { title: 'black square', code: '\u{2B1B}' },
  { title: 'white square', code: '\u{2B1C}' },
  { title: 'check mark', code: '\u{2714}' },
  { title: 'green check mark', code: '\u2714\uFE0F' },
  { title: 'check button', code: '\u{2611}' },
  { title: 'green check button', code: '\u{2705}' },
  { title: 'blue check button', code: '\u2611\uFE0F' },
  { title: 'cross mark', code: '\u{274C}' },
  { title: 'green cross button', code: '\u{274E}' },
  { title: 'red heart', code: '\u2764\uFE0F' },
  { title: 'blue heart', code: '\u{1F499}' },
  { title: 'green heart', code: '\u{1F49A}' },
  { title: 'yellow heart', code: '\u{1F49B}' },
  { title: 'purple heart', code: '\u{1F49C}' },
  { title: 'orange heart', code: '\u{1F9E1}' },
  { title: 'black heart', code: '\u{1F5A4}' },
  { title: 'sparkling heart', code: '\u{1F496}' }
];

const defaultOptions = {
  number: undefined, 
  ratingType: 'emoji', 
  ratingDivClass: undefined,
  ratingId: undefined, 

  backgroundOpacity: 0.5,
  hoverOpacity: 0.7, 

  emojisArray: ['yellow star', 'yellow star', 'yellow star'], 
  backgroundEmoji: undefined, 

  imageSources: [], 
  backgroundImage: undefined, 

  backgroundBarColor: '#d3d3d3', 
  selectedBarColor: '#1b1b1b', 
  hoverBarColor: '#808080', 
  numberInside: false, 

  isDisabled: false, 

  onChange: value => {

  }
}


const upToClassName = (element, className) => {

  while (element && element.parentNode) {
    element = element.parentNode;
    if (element.classList && element.classList.contains(className)) {
      return element;
    }
  }
  return undefined;
}

const upToTagName = (element, tagName) => {
  tagName = tagName.toLowerCase();

  while (element && element.parentNode) {
    element = element.parentNode;
    if (element.tagName && element.tagName.toLowerCase() == tagName) {
      return element;
    }
  }
  return undefined;
}
// Replace this function with an object method if possible (poor algorithm)
const extend = (defaultObject, newObject) => {
  let mergedObject = {};
  for (var key in defaultObject) {
    if (newObject.hasOwnProperty(key)) {
      mergedObject[key] = newObject[key];
    } else {
      mergedObject[key] = defaultObject[key];
    }
  }
  for (var k in newObject) {
    if (!mergedObject.hasOwnProperty(k)) {
      mergedObject[k] = newObject[k];
    }
  }
  return mergedObject;
}

const findEmojiCode = emojiTitle => {
  let code;
  allEmojis.forEach(emoji => {
    if (emoji.title.replace(/\s/g, "") === emojiTitle.replace(/\s/g, "")) {
      code = emoji.code;
    }
  });
  if (!code && emojiTitle.length > 2) {
    console.warn(`${emojiTitle} is not in our names(in AltaRating) as an emoji and it seems like it's not a Unicode for an emoji either! 
    If everything is ok, just ignore this warning.`);
  }
  return code;
}

const AltaRating = ({ options: userOption, value: val, number, ratingClass, ratingId, ratingType, isDisabled, callback }) => {
  let options = (userOption) ? extend(defaultOptions, userOption) : defaultOptions;

  options.number = number ? number : undefined;
  options.ratingDivClass = ratingClass ? ratingClass : '';
  options.ratingId = ratingId ? ratingId : '';
  options.ratingType = ratingType ? ratingType : 'emoji';
  options.isDisabled = isDisabled ? isDisabled : false;
  options.onChange = callback ? callback : () => { };

  let [value, setValue] = useState(val);

  // Handling Errors 
  let allowedPropertyTypes = [
    ['number', 'number'],
    ['ratingType', 'string'],
    ['ratingDivClass', 'string'],
    ['ratingId', 'string'],

    ['backgroundOpacity', 'number'],
    ['hoverOpacity', 'number'],

    ['emojisArray', 'object'],
    ['backgroundEmoji', 'string'],

    ['imageSources', 'object'],
    ['backgroundImage', 'string'],

    ['backgroundBarColor', 'string'],
    ['selectedBarColor', 'string'],
    ['hoverBarColor', 'string'],
    ['numberInside', 'boolean'],


    ['isDisabled', 'boolean'],
    ['onChange', 'function']
  ];

  Object.getOwnPropertyNames(options).map((propertyName) => {
    allowedPropertyTypes.map(name => {
      if (name[0] === propertyName) {
        if (options[propertyName] && typeof options[propertyName] !== name[1]) {
          throw new Error(`Type of "${propertyName}" should be ${name[1]}`);
        }
      }
    });
  });

  let allowedRatingTypes = ['emoji', 'image', 'bar'];
  if (!allowedRatingTypes.includes(options.ratingType)) {
    throw new Error('The ratingType should be "emoji" or "image" or "bar"!');
  }

  if (options.backgroundOpacity > 1 || options.hoverOpacity > 1) {
    throw new Error(`"backgroundOpacity" and "hoverOpacity" cannot be more than 1!`)
  }

  if ((options.number && val > options.number)) {
    throw new Error('Your initial value is beyond the scope of your rating!\n'
      + val + ' > ' + options.number);
  }
  if (!options.number && val > (options.emojisArray.length - 1)) {
    throw new Error('Your initial value is beyond the scope of your rating!\n'
      + val + ' > ' + (options.emojisArray.length - 1));
  }

  options.emojisArray.map(element => {
    if (typeof element !== 'string') {
      throw new Error('The elements of emojisArray should be a string!');
    }
  });

  const EmojiCreator = () => {
    if (options.ratingType === 'emoji') {
      let emojis = [];
      if (options.number) {
        if (findEmojiCode(options.emojisArray[0])) {
          for (let i = 0; i < options.number; i++) {
            emojis.push(findEmojiCode(options.emojisArray[0]));
          }
        } else {
          for (let i = 0; i < options.number; i++) {
            emojis.push(options.emojisArray[0]);
          }
        }
      } else {
        if (findEmojiCode(options.emojisArray[value])) {
          for (let i = 0; i < options.emojisArray.length - 1; i++) {
            emojis.push(findEmojiCode(options.emojisArray[value]));
          }
        } else {
          for (let i = 0; i < options.emojisArray.length - 1; i++) {
            emojis.push(options.emojisArray[value]);
          }
        }
      }

      return (
        <div
          value={value}
          id={options.ratingId ? options.ratingId : undefined}
          className={`rating ${options.ratingDivClass}`}
          style={{
            textAlign: 'center'
          }}>
          {emojis.map((emoji, index) => <div
            className={`emoji element${index + 1} ${(index + 1 <= value) ? 'selected' : ''}`}
            key={index + 1}
            id={index + 1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
              fontSize: '60px',
              cursor: 'pointer',
              opacity: (index + 1 <= value) ? '1' : String(options.backgroundOpacity),
              display: 'inline-block'
            }}
          >{(options.backgroundEmoji && (index + 1 > value))
            ? ((findEmojiCode(options.backgroundEmoji))
              ? findEmojiCode(options.backgroundEmoji)
              : options.backgroundEmoji)
            : emoji}</div>)}
        </div>
      );
    }
  }

  const ImageCreator = () => {
    if (options.ratingType === 'image') {
      let images = [];
      if (options.number) {
        for (let i = 0; i < options.number; i++) {
          images.push(options.imageSources[0]);
        }
      } else {
        for (let i = 0; i < options.imageSources.length - 1; i++) {
          images.push(options.imageSources[value]);
        }
      }
      return (
        <div
          value={value}
          id={options.ratingId ? options.ratingId : undefined}
          className={`rating ${options.ratingDivClass}`}
          style={{
            textAlign: 'center'
          }}>
          {images.map((image, index) => <img
            src={(options.backgroundImage && (index + 1 > value))
              ? options.backgroundImage
              : image
            }
            alt={value}
            key={index + 1}
            id={index + 1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className={`rating-image element${index + 1} ${(index + 1 <= value) ? 'selected' : ''}`}
            style={{
              cursor: 'pointer',
              opacity: (index + 1 <= value) ? '1' : String(options.backgroundOpacity)
            }}
          />)}
        </div>
      );
    }
  }

  const BarCreator = () => {
    if (options.ratingType === 'bar') {
      let bars = [];
      for (let i = 0; i < options.number; i++) {
        bars.push(i);
      }

      return (
        <div
          value={value}
          id={options.ratingId ? options.ratingId : undefined}
          className={`rating ${options.ratingDivClass}`}
          style={{
            textAlign: 'center'
          }}>
          {bars.map(index => <span
            className={`bar element${index + 1} ${(index + 1 <= value) ? 'selected' : ''}`}
            key={index + 1}
            id={index + 1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
              background: (index + 1 <= value) ? options.selectedBarColor : options.backgroundBarColor,
              cursor: 'pointer',
              display: 'inline-block',
              boxSizing: 'border-box'

            }}
          >
            {(options.numberInside) ? (index + 1) : `\u00A0`}
          </span>)}
        </div>
      );
    }
  }

  const handleMouseEnter = event => {
    if (!options.isDisabled) {
      let hoveredElementId = event.target.id;
      let elements = event.target.parentElement.childNodes;

      for (let i = 0; i < elements.length; i++) {
        if (Number(elements[i].id) <= Number(hoveredElementId) && !elements[i].classList.contains('selected')) {
          if (options.ratingType === 'bar') {
            elements[i].style.background = options.hoverBarColor;
          } else if (options.ratingType === 'emoji' || options.ratingType === 'image') {
            elements[i].style.opacity = String(options.hoverOpacity);
          }
        }
      }
    }
  }

  const handleMouseLeave = event => {
    if (!options.isDisabled) {
      let hoveredElementId = event.target.id;
      let elements = event.target.parentElement.childNodes;

      for (let i = 0; i < elements.length; i++) {
        if (Number(elements[i].id) <= Number(hoveredElementId) && !elements[i].classList.contains('selected')) {
          if (options.ratingType === 'bar') {
            elements[i].style.background = options.backgroundBarColor;
          } else if (options.ratingType === 'emoji' || options.ratingType === 'image') {
            elements[i].style.opacity = String(options.backgroundOpacity);
          }
        }
      }
    }
  }
  const handleClick = event => {
    if (!options.isDisabled) {
      let clickedElement = event.target;
      let clickedId = event.target.id;
      let alreadySelectedElements = [];
      for (let i = 0; i < event.target.parentElement.childNodes.length; i++) {
        if (event.target.parentElement.childNodes[i].classList.contains('selected')) {
          alreadySelectedElements.push(event.target.parentElement.childNodes[i]);
        }
      }

      if (clickedElement.classList.contains('selected')) {
        if (clickedElement === alreadySelectedElements[alreadySelectedElements.length - 1]) {
          setValue(clickedId - 1);
        } else {
          setValue(clickedId);
        }
      } else {
        setValue(clickedId);
      }
      clickedElement.classList.toggle('selected');

      if (upToTagName(clickedElement, 'alta-rating')) {
        upToTagName(clickedElement, 'alta-rating').setAttribute('value', clickedId);
      } else {
        upToClassName(clickedElement, 'AltaRating').setAttribute('value', clickedId);
      }
    }
  }
  useEffect(() => {
    options.onChange(Number(value));
  }, [value]);

  return (
    <div className="AltaRating">
      {(options.ratingType === 'emoji')
        ? <EmojiCreator />
        : (options.ratingType === 'image')
          ? <ImageCreator />
          : (options.ratingType === 'bar')
            ? <BarCreator />
            : {}
      }
    </div>
  );
}


export default AltaRating;
