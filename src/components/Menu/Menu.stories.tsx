import React, {useState} from "react";
import {Story} from "@storybook/react/types-6-0";
import Menu, {MenuProps} from "./Menu";

const Template: Story<MenuProps> = (args) => <Menu {...args}/>;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    title: "Menu",
    items: []
};