---
title: "Creating a DataView Helper Component"
date: "2019-05-03"
categories:
- React
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

```js
//...
<pre>{JSON.stringify(data, null, 2)}</pre>
//...
```

import DataView2 from './src/components/DataView2';

<OutputContainer>
  <DataView2 data={data} />
</OutputContainer>


Awesome 👍🏻

Now we can make use of the button to show/hide our data viewer. To do this, we need to add some simple state logic that controls the data viewer with a `Boolean` value.

```js
const DataView = props => {
  const { data } = props;
  const [visible, setVisible] = useState(false);
  
  return (
    <div>
      <button type='button' onClick={() => setVisible(prev => !prev)}>
        i
      </button>
      {visible && (
        <pre style={{ display: visible ? 'block' : 'none' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};
```

import DataView3 from './src/components/DataView3';

<OutputContainer>
  <DataView3 data={data} />
</OutputContainer>

Congratulations 🎉 You've successfully created a dumb component. It does one thing, and it does it really well - display data!

## Use Case
I typically use something like this when I want to see live changes to my app as I interact with it. Admittedly I could just use the [React Developer Tools](https://www.google.com/search?client=opera&hs=QLP&ei=RWfQXLbyHsH6sAW4o4eQAQ&q=React+Developer+Tools&oq=React+Developer+Tools&gs_l=psy-ab.3..0l10.5606.5606..6077...0.0..0.87.87.1......0....2j1..gws-wiz.......0i71.jldEa6IIqxs), but sometimes I just prefer something quick. I don't think that the React Developer tools are powerful enough yet. Although at the time of writing this I think that there's a really big overhaul coming out soon that's going to really enhance tooling for React.

## Thanks for reading 👋🏻
I have a gist with some `extra styling` I find useful for this DataView component. You can find it [here](https://gist.github.com/dmetivier/b67b703c4bbec4bdc22a76170adc09c5). Cheers 🍻
