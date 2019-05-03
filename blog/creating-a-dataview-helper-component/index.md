---
title: "Creating a DataView Helper Component"
date: "2019-05-03"
categories:
- React
- Snippets
---

I love dumb small, dumb components that do `one` thing and do it very well.

## What Classifies Something As A "Dumb" Component?

A dumb component typically does something very simple. You can create button components that dispatch event logic to a higher order component, weave contexts together through a composer, or construct toast notifications that are simply reactionary to the props you send to it. I'm going to be discussing how we can make a dumb, very rudimentary data viewer that reacts to changes in data that are passed to it.

Let's set up a base. We'll need to pass some data to our component:

```js
import React from 'react';

const DataView = props => {
  const { data } = props;

  return (
    <div>
      <button type='button'>i</button>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default DataView;
```

import OutputContainer from '../../src/components/OutputContainer';
import DataView1 from './src/components/DataView1';
import data from './src/data/data'

<OutputContainer>
    <DataView1 data={data} />
</OutputContainer>

Great! But it's not really formatted all that well. Let's add some options to our JSON method and see how it looks:

import DataView2 from './src/components/DataView2';

<OutputContainer>
    <DataView2 data={data} />
</OutputContainer>
