"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";
const NavigationMenu = /*#__PURE__*/ React.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxs(NavigationMenuPrimitive.Root, {
        ref: ref,
        className: cn("relative z-10 flex flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsx(NavigationMenuViewport, {})
        ]
    }));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(NavigationMenuPrimitive.List, {
        ref: ref,
        className: cn("group flex flex-1 list-none items-center justify-center", className),
        ...props
    }));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 dark:focus:bg-slate-800 disabled:pointer-events-none bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800 data-[active]:bg-slate-50 dark:data-[active]:bg-slate-800 h-10 py-2 px-4 group w-max");
const NavigationMenuTrigger = /*#__PURE__*/ React.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxs(NavigationMenuPrimitive.Trigger, {
        ref: ref,
        className: cn(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ _jsx(ChevronDown, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            })
        ]
    }));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(NavigationMenuPrimitive.Content, {
        ref: ref,
        className: cn("top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 md:absolute md:w-auto ", className),
        ...props
    }));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx("div", {
        className: cn("absolute left-0 top-full flex justify-center"),
        children: /*#__PURE__*/ _jsx(NavigationMenuPrimitive.Viewport, {
            className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95 dark:border-slate-700 dark:bg-slate-800 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref,
            ...props
        })
    }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsx(NavigationMenuPrimitive.Indicator, {
        ref: ref,
        className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out", className),
        ...props,
        children: /*#__PURE__*/ _jsx("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800"
        })
    }));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
export { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport,  };
