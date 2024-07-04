"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { CenterVariant } from "./CenterVariant";
import { RightVariant } from "./RightVariant";
import { LeftVariant } from "./LeftVariant";
import { ReverseVariant } from "./ReverseVariant";
export const NavDemo = ({ navData, navItems, logo, logoSec, layoutVariant })=>{
    if (layoutVariant === "center") {
        return /*#__PURE__*/ _jsx(CenterVariant, {
            navData: navData,
            navItems: navItems,
            logo: logo,
            logoSec: logoSec
        });
    } else if (layoutVariant === "right") {
        return /*#__PURE__*/ _jsx(RightVariant, {
            navData: navData,
            navItems: navItems,
            logo: logo,
            logoSec: logoSec
        });
    } else if (layoutVariant === "left") {
        return /*#__PURE__*/ _jsx(LeftVariant, {
            navData: navData,
            navItems: navItems,
            logo: logo,
            logoSec: logoSec
        });
    } else if (layoutVariant === "reverse") {
        return /*#__PURE__*/ _jsx(ReverseVariant, {
            navData: navData,
            navItems: navItems,
            logo: logo,
            logoSec: logoSec
        });
    }
};
