import React from 'react'
import LayersIcon from '@mui/icons-material/Layers';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
{
  title: "Dashboard",
  icon:<LayersIcon />,
  link:'/Dashboard'
},
{
    title: 'Widget',
    icon:<WidgetsIcon/>,
    link: '/widget'
},
{
    title: "Reviews" ,
    icon:<StarBorderPurple500Icon/>,
    link: '/reviews'
},
{
    title: 'Customers',
    icon:<PersonOutlineIcon/>,
    link: '/customers'
},
{
    title: "Online Analysis" ,
    icon:<InsightsIcon/>,
    link: '/analysis'
},
{
    title: 'Settings',
    icon:<SettingsIcon />,
    link: '/settings'
}
]
  
 