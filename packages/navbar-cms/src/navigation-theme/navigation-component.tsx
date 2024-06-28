"use client"
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './style.css';

const NavigationMenuDemo = ({ data }) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
      <img src={'/logo.svg'} alt="My Image" height={200} width={200} className="logo"/>
        {data.map((item) => (
          <NavigationMenuItem key={item.id} item={item.link} />
        ))}
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const NavigationMenuItem = ({ item }) => {
  if (item.type === 'link') {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link className="NavigationMenuLink" href={item.link}>
          {item.label}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  } else if (item.type === 'dropdown') {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="NavigationMenuTrigger">
          {item.label} <CaretDownIcon className="CaretDown" aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="">
          <ul className={`List ${item.label.toLowerCase()}`}>
            {item.dropdown.map((dropdownItem, index) => (
              <ListItem key={index} href={`${dropdownItem.url}`}  title={dropdownItem.label}>
                {/* {dropdownItem.link} */}
              </ListItem>
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }
  return null;
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavigationMenuDemo;