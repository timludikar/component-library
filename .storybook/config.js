// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/article/stories');
  require('../src/components/aside/stories');
  require('../src/components/header/stories');
  require('../src/components/lists/stories');
  require('../src/components/paragraph/stories');
  require('../src/components/section/stories');

  // Container Elements
  require('../src/containers/topheader/stories');
}

configure(loadStories, module);
