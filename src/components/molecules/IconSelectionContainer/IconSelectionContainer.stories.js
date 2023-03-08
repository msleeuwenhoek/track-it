import React from 'react'
import IconSelectionContainer from './IconSelectionContainer'

const IconSelectionContainerMeta = {
    title: "atoms/IconSelectionContainer",
    component: IconSelectionContainer,
    argTypes: {
        testID: { table: { disable: true } },
    }
}

const testID = "IconSelectionContainer-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <IconSelectionContainer {...args} />

export const DefaultIconSelectionContainer = Template.bind({})
DefaultIconSelectionContainer.args = {
    testID: testID,
}

export default IconSelectionContainerMeta