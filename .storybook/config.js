import { configure } from '@storybook/react'
import { configureViewport } from '@storybook/addon-viewport';

function loadStories() {
	require('../src/stories/index')
	require('../src/stories/pages')
	require('../src/stories/components')
}

configure(loadStories, module)
