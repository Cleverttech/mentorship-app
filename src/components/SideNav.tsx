import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Tooltip,
  Divider,
  ListItemButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import { useAuth } from '../context/AuthContext';

export default function SideNav() {
  const navigate = useNavigate();
  const { logout, role } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 80,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 80,
          boxSizing: 'border-box',
          backgroundColor: '#1A2027',
          color: '#fff',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        {/* Top logo */}
        <List>
          <ListItem disablePadding sx={{ justifyContent: 'center' }}>
            <SchoolIcon sx={{ color: '#fff', fontSize: 32 }} />
          </ListItem>
        </List>

        {/* Middle navigation icons */}
        <List>
          <Tooltip title="Dashboard" placement="right">
            <ListItemButton
              onClick={() => navigate(`/${role}/dashboard`)}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <DashboardIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Mentors" placement="right">
            <ListItemButton
              onClick={() => navigate('/mentors')}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <PeopleIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Messages" placement="right">
            <ListItemButton
              onClick={() => navigate('/messages')}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <MessageIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Profile" placement="right">
            <ListItemButton
              onClick={() => navigate('/profile')}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <AccountCircleIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>

          <Tooltip title="Buy Credits" placement="right">
            <ListItemButton
              onClick={() => navigate('/buy-credits')}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <CreditCardIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </List>

        <Divider sx={{ bgcolor: 'grey.700', my: 1 }} />

        {/* Bottom logout */}
        <List>
          <Tooltip title="Logout" placement="right">
            <ListItemButton
              onClick={handleLogout}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 'auto' }}>
                <LogoutIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </List>
      </Box>
    </Drawer>
  );
}
