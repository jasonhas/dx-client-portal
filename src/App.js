import { useState } from 'react';
import './App.css';
import { BsAppIndicator, BsSearch, BsGearFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { FaUserAlt, FaFileInvoiceDollar } from 'react-icons/fa'
import { RxCaretLeft } from 'react-icons/rx'
import { MdAnalytics, MdOutlinePayments } from 'react-icons/md'
import { RiDashboardFill, RiInboxFill, RiCalendar2Fill, RiFolder5Fill } from 'react-icons/ri'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Inbox from './pages/Inbox'
import Accounts from './pages/AccountPage'
import Analytics from './pages/Analytics';
import Calendar from './pages/CalendarPage';
import Files from './pages/FilesPage';
import Search from './pages/SearchPage';
import Settings from './pages/Settings';
import Statements from './pages/Statements';
import Payments from './pages/BillPay'

function App() {

  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Dashboard", src: <RiDashboardFill className='text-2xl'/>, route: "/" },
    { title: "Inbox", src: <RiInboxFill className="text-2xl"/>, route: "/inbox" },
    {title: "Statements", src: <FaFileInvoiceDollar className='text-2xl'/>, route: "/statements"},
    { title: "Bill Pay", src: <MdOutlinePayments className='text-2xl'/>, route: "/payments"},
    { title: "Accounts", src: <FaUserAlt className='text-2xl'/>, route: "/account", gap: true },
    { title: "Calendar", src: <RiCalendar2Fill className='text-2xl'/>, route: "/calendar" },
    { title: "Search", src: <BsSearch className='text-2xl'/>, route: "/search" },
    { title: "Analytics", src: <MdAnalytics className='text-2xl'/>, route: '/analytics' },
    { title: "Files ", src: <RiFolder5Fill className='text-2xl'/>, gap: true, route: '/files' },
    { title: "Setting", src: <BsGearFill className='text-2xl'/>, route: '/settings'},
    { title: "Logout" , src: <BiLogOut className='text-2xl'/>, gap: true, route: '/logout'}
  ];

  return (
    <Router>
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20"} duration-300 p-5 pt-8 h-screen bg-dark-purple relative`}>
        <RxCaretLeft className={`absolute bg-white cursor-pointer rounded-full -right-3 top-9 w-7 h-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}/>
        <div className='flex gap-x-4 items-center'>
          <BsAppIndicator className={`cursor-pointer text-white text-3xl duration-500 ${ open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"}`}>Client Portal</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-yellow"
              } `}
            >
              {/* <Link to={Menu.route}>{Menu.src}</Link> */}
              <Link to={Menu.route}>{Menu.src}</Link>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/inbox" element={<Inbox/>}/>
      <Route path="/account" element={<Accounts/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/files" element={<Files/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/statements" element={<Statements/>}/>
      <Route path="/payments" element={<Payments/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
