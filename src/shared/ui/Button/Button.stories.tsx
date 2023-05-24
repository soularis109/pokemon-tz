import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',

};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',

};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
};


export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',

};

export const Square = Template.bind({});
Square.args = {
    children: '>',

    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',

    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',

    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',

    disabled: true,
};
