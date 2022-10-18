import React, { Component } from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
    {
        title:'Utilisateurs',
        path:'/users',
        icon: <FiIcons.FiUsers />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title:'Lorem Ipsum-1',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            }
        ]
    },
    {
        title:'Tickets',
        path:'/admin/tickets',
        icon: <FaIcons.FaTicketAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title:'Lorem Ipsum-1',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            }
        ]
    },

    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title:'Lorem Ipsum-1',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title:'Lorem Ipsum-2',
                path:'/overview',
                icon: <AiIcons.AiFillHome />,
            }
        ]
    }
    
];