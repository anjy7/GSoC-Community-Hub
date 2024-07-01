"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './style.css';
const NavigationMenuDemo = ({ data })=>{
    return /*#__PURE__*/ _jsxs(NavigationMenu.Root, {
        className: "NavigationMenuRoot",
        children: [
            /*#__PURE__*/ _jsxs(NavigationMenu.List, {
                className: "NavigationMenuList",
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        src: '/logo.svg',
                        alt: "My Image",
                        height: 200,
                        width: 200,
                        className: "logo"
                    }),
                    data.map((item)=>/*#__PURE__*/ _jsx(NavigationMenuItem, {
                            item: item.link
                        }, item.id)),
                    /*#__PURE__*/ _jsx(NavigationMenu.Indicator, {
                        className: "NavigationMenuIndicator",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "Arrow"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "ViewportPosition",
                children: /*#__PURE__*/ _jsx(NavigationMenu.Viewport, {
                    className: "NavigationMenuViewport"
                })
            })
        ]
    });
};
const NavigationMenuItem = ({ item })=>{
    if (item.type === 'link') {
        return /*#__PURE__*/ _jsx(NavigationMenu.Item, {
            children: /*#__PURE__*/ _jsx(NavigationMenu.Link, {
                className: "NavigationMenuLink",
                href: item.link,
                children: item.label
            })
        });
    } else if (item.type === 'dropdown') {
        return /*#__PURE__*/ _jsxs(NavigationMenu.Item, {
            children: [
                /*#__PURE__*/ _jsxs(NavigationMenu.Trigger, {
                    className: "NavigationMenuTrigger",
                    children: [
                        item.label,
                        " ",
                        /*#__PURE__*/ _jsx(CaretDownIcon, {
                            className: "CaretDown",
                            "aria-hidden": true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(NavigationMenu.Content, {
                    className: "",
                    children: /*#__PURE__*/ _jsx("ul", {
                        className: `List ${item.label.toLowerCase()}`,
                        children: item.dropdown.map((dropdownItem, index)=>/*#__PURE__*/ _jsx(ListItem, {
                                href: `${dropdownItem.url}`,
                                title: dropdownItem.label
                            }, index))
                    })
                })
            ]
        });
    }
    return null;
};
const ListItem = /*#__PURE__*/ React.forwardRef(({ className, children, title, ...props }, forwardedRef)=>/*#__PURE__*/ _jsx("li", {
        children: /*#__PURE__*/ _jsx(NavigationMenu.Link, {
            asChild: true,
            children: /*#__PURE__*/ _jsxs("a", {
                className: classNames('ListItemLink', className),
                ...props,
                ref: forwardedRef,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "ListItemHeading",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "ListItemText",
                        children: children
                    })
                ]
            })
        })
    }));
export default NavigationMenuDemo;
