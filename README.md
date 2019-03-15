# useStateList

`ComponentLifespan` is a React Component that measures it's own lifespan, and subsequently the lifespan of it's children.  It is a simple-to-use component to help time certain things.

[![version](https://img.shields.io/npm/v/component-lifespan.svg)](https://www.npmjs.com/package/component-lifespan)
[![minified size](https://img.shields.io/bundlephobia/min/component-lifespan.svg)](https://www.npmjs.com/package/component-lifespan)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/component-lifespan.svg)](https://www.npmjs.com/package/component-lifespan)
[![downloads](https://img.shields.io/npm/dt/component-lifespan.svg)](https://www.npmjs.com/package/component-lifespan)

## Install

* `npm install component-lifespan` or
* `yarn add component-lifespan`

## Use

```JavaScript
import React, { useState } from 'react';
import ComponentLifespan from 'component-lifespan';

const MyDummyComponent = () => {
  const [show, setShow] = useState(true);
  const [lifetime, setLifetime] = useState();
  const handleClick = () => setShow(false);

  return (
     <>
      <h1>Component Lifespan Test</h1>
      {show && (
        <ComponentLifespan updateElapsedTime={setLifetime}>
          <button type="button" onClick={handleClick}>
            Click Me!
          </button>
        </ComponentLifespan>
      )}
      {lifetime && <h2>Comonent lasted {lifetime / 1000} seconds</h2>}
    </>
  );
};
```
