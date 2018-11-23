import { configure } from '@storybook/react'

function loadStories() {
	require('../src/stories/index')
	require('../src/stories/pages')
	require('../src/stories/components')
}

configure(loadStories, module)
