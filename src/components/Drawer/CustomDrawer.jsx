import React, { useContext, useState } from 'react';
import { Drawer, Button, Accordion, ButtonToolbar } from 'rsuite';
import { FaBars } from 'react-icons/fa';


import 'rsuite/Drawer/styles/index.css';
import 'rsuite/Button/styles/index.css';
import 'rsuite/Accordion/styles/index.css';

import 'rsuite/Animation/styles/index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SwitchDark from '../Switch/SwitchDark';
import { DarkModeContext } from '../../contexts/DarkMode';

export default function CustomDrawer() {

  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const UserName = useSelector(state => state.User.user?.UserName);

  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [seeAll, setSeeAll] = useState(false);

  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sections = [
    {
      title: 'Trending',
      links: [
        { text: 'Best Sellers', to: '/best-sellers' },
        { text: 'New Releases', to: '/' },
        { text: 'Electronics', to: '/electronics' },
      ],
    },
    {
      title: 'Digital content and devices',
      links: [{ text: 'Amazon Kindle E-readers', to: '/kindle' }],
    },
    {
      title: 'Shop by Category',
      links: [
        { text: 'Mobiles, Tablets & Accessories', to: '/mobiles-accessories' },
        { text: 'Computers & Office Supplies', to: '/computer-accessories' },
        { text: 'TVs & Electronics', to: '/tvs' },
        { text: "Women's Fashion", to: '/watches' },
      ],
    },
  ];

  const accordSection = [
    {
      links: [
        { text: "Men's Fashion", to: '/home-entertainment-systems' },
        { text: 'Kids Fashion', to: '/wearable-technology' },
        { text: 'Health, Beauty & Perfumes', to: '/wearable-technology' },
        { text: 'Home, Furniture & Tools', to: '/wearable-technology' },
        { text: 'Toys, Games & Baby', to: '/wearable-technology' },
        { text: 'Sports, Fitness & Outdoors', to: '/wearable-technology' },
        { text: 'Video Games', to: '/wearable-technology' },
        { text: 'Automotive', to: '/wearable-technology' },
        { text: 'Books', to: '/wearable-technology' },
      ],
    },
  ];
  return (
    <>
      <ButtonToolbar>
        <Button
          className="p-1 text-base bg-transparent border-none outline-none focus:outline-none focus:bg-transparent hover:bg-transparent"
          size="xs"
          onClick={() => handleOpen('xs')}
        >
          <FaBars className="mr-2 font-bold" />
          All
        </Button>
      </ButtonToolbar>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header className="bg-[#232f3e]">
          <Drawer.Title className="text-white">Hello {UserName}</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body className='text-white dark:bg-[#15141c]'>
          {sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold text-black dark:text-white">{section.title}</h1>
              {section.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded] dark:hover:bg-[#352e63]"
                >
                  <h3 className="font-semibold dark:text-white">
                    <Link
                      to={link.to}
                      className="block w-full ml-2 text-[#3b3b3b] no-underline hover:no-underline dark:text-white"
                      onClick={handleClose}
                    >
                      {link.text}
                    </Link>
                  </h3>
                </div>
              ))}
              {index < sections.length - 1 && <hr />}
            </div>
          ))}
          <hr />
          <div className="flex items-center justify-between w-full p-1">
            <h1 className="text-xl font-semibold">Dark Mode {darkMode === 'dark' ? 'light' : 'dark'}</h1>
            <SwitchDark />
          </div>

          <Accordion className='dark:text-white' >
            <Accordion.Panel className='font-semibold dark:text-white'
              header={seeAll ? 'See Less' : 'See All'}
              onClick={() => setSeeAll(!seeAll)}
            >
              {accordSection[0].links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-full p-1 rounded-md hover:bg-[#eaeded] dark:bg-[#15141c] dark:hover:bg-[#352e63]"
                >
                  <h3 className="font-semibold dark:text-white">
                    <Link
                      to={link.to}
                      className="block w-full ml-2 text-[#3b3b3b] no-underline hover:no-underline dark:text-white"
                      onClick={handleClose}
                    >
                      {link.text}
                    </Link>
                  </h3>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion>

          <Accordion >
            <Accordion.Panel header="Help & Settings" className='font-semibold text-white'>
              <div className="w-full p-1 rounded-md hover:bg-[#eaeded] dark:hover:bg-[#352e63]">
                <h3 className="font-semibold">
                  <Link
                    to="/profile"
                    className="block w-full ml-2 text-[#3b3b3b] no-underline hover:no-underline dark:text-white "
                    onClick={handleClose}
                  >
                    Your Account
                  </Link>
                </h3>
              </div>
              <select
                className="text-base font-bold bg-transparent border-none rounded-md"
                onChange={e => setLang(e.target.value)}
              >
                <option className=" bg-slate-900" value="en">
                  EN
                </option>
                <option className=" bg-slate-900" value="ar">
                  AR
                </option>
              </select>
              <div className="w-full p-1 rounded-md hover:bg-[#eaeded] dark:hover:bg-[#352e63] ">
                <h3 className="font-semibold">
                  <Link
                    to="/Help"
                    className="block w-full text-[#3b3b3b] no-underline hover:no-underline dark:text-white"
                    onClick={handleClose}
                  >
                    Help
                  </Link>
                </h3>
              </div>
              <div className="w-full p-1 rounded-md hover:bg-[#eaeded] dark:hover:bg-[#352e63]  ">
                <h3 className="font-semibold">
                  <Link
                    to="/SighOut"
                    className="block w-full ml-2 text-[#3b3b3b] no-underline hover:no-underline dark:text-white"
                    onClick={handleClose}
                  >
                    Sigh Out
                  </Link>
                </h3>
              </div>
            </Accordion.Panel>
          </Accordion>
        </Drawer.Body>
      </Drawer>
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
}
