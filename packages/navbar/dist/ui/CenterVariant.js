import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./Navbar";
import Link from "next/link";
import { cn } from "@lib/utils";
export const CenterVariant = ({ navData, navItems, logo, logoSec })=>{
    return navItems.length > 0 ? /*#__PURE__*/ _jsx("header", {
        className: "header__nav",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "header__container",
            children: [
                /*#__PURE__*/ _jsxs("a", {
                    className: "logo__link",
                    children: [
                        logo,
                        /*#__PURE__*/ _jsx("span", {
                            className: "ml-3 text-xl",
                            children: navData.brandLogo.data.attributes.logoText
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("nav", {
                    className: "nav__items--center",
                    children: /*#__PURE__*/ _jsx(NavigationMenu, {
                        children: /*#__PURE__*/ _jsx(NavigationMenuList, {
                            children: navItems.map((navItem)=>{
                                if (navItem.show) {
                                    if (navItem.item.attributes.type === "variant1") {
                                        return /*#__PURE__*/ _jsxs(NavigationMenuItem, {
                                            children: [
                                                /*#__PURE__*/ _jsx(NavigationMenuTrigger, {
                                                    children: navItem.item.attributes.title
                                                }),
                                                /*#__PURE__*/ _jsx(NavigationMenuContent, {
                                                    children: /*#__PURE__*/ _jsxs("ul", {
                                                        className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("li", {
                                                                className: "row-span-3",
                                                                children: /*#__PURE__*/ _jsx(NavigationMenuLink, {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md",
                                                                        href: "/",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "mt-4 mb-2 text-lg font-medium text-white",
                                                                                children: navItem.item.attributes.tile.data.attributes.description
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("p", {
                                                                                className: "text-sm leading-tight text-white/90",
                                                                                children: navItem.item.attributes.tile.data.attributes.description
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            navItem.item.attributes.subTiles.data.map((subTile)=>{
                                                                return /*#__PURE__*/ _jsx(ListItem, {
                                                                    href: subTile.attributes.href,
                                                                    title: subTile.attributes.title,
                                                                    children: subTile.attributes.description
                                                                }, subTile.id);
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, navItem.item.id + "variant1");
                                    } else if (navItem.item.attributes.type === "variant2") {
                                        return /*#__PURE__*/ _jsxs(NavigationMenuItem, {
                                            children: [
                                                /*#__PURE__*/ _jsx(NavigationMenuTrigger, {
                                                    children: navItem.item.attributes.title
                                                }),
                                                /*#__PURE__*/ _jsx(NavigationMenuContent, {
                                                    children: /*#__PURE__*/ _jsx("ul", {
                                                        className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",
                                                        children: navItem.item.attributes.components.data.map((component)=>{
                                                            return /*#__PURE__*/ _jsx(ListItem, {
                                                                title: component.attributes.title,
                                                                href: component.attributes.href,
                                                                children: component.attributes.description
                                                            }, component.id + "subcomp");
                                                        })
                                                    })
                                                })
                                            ]
                                        }, navItem.item.id + "variant2");
                                    } else if (navItem.item.attributes.type === "variant3") {
                                        return /*#__PURE__*/ _jsx(NavigationMenuItem, {
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: navItem.item.attributes.href,
                                                legacyBehavior: true,
                                                passHref: true,
                                                children: /*#__PURE__*/ _jsx(NavigationMenuLink, {
                                                    className: navigationMenuTriggerStyle(),
                                                    children: navItem.item.attributes.title
                                                })
                                            })
                                        }, navItem.item.id + "variant3");
                                    }
                                }
                            })
                        })
                    })
                }),
                logoSec
            ]
        })
    }) : null;
};
const ListItem = /*#__PURE__*/ React.forwardRef(({ className, title, children, ...props }, ref)=>{
    return /*#__PURE__*/ _jsx("li", {
        children: /*#__PURE__*/ _jsx(NavigationMenuLink, {
            asChild: true,
            children: /*#__PURE__*/ _jsxs("a", {
                ref: ref,
                className: cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700", className),
                ...props,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "text-sm font-medium leading-none",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400",
                        children: children
                    })
                ]
            })
        })
    });
});
ListItem.displayName = "ListItem";
