import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';
//import { Link } from 'react-router-dom';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CartModule from './CartModule';
import LogOutModule from './LogOutModule';
import LoginModule from './LoginModule';
import RegisterModule from './RegisterModule';
import {Link} from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function NavBar() {
  const Cart = <CartModule/>
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><RegisterModule/></MenuItem>
      <MenuItem onClick={handleMenuClose}><LoginModule/></MenuItem>
      <MenuItem onClick={handleMenuClose}><LogOutModule/></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon onClick={<CartModule/>}/>
          </Badge>
        </IconButton>
        <p>MyOrders</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [opens, setOpens] = React.useState(false);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={opens} onClose={()=>setOpens(false)}>
      <Box
      sx={{ width: 250 , backgroundColor:"#f76f72"}}
      role="presentation"
    >
      <List sx={{backgroundColor:"#f76f72"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/mywallet'>My Wallet</Link></ListItemText>           
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <DeliveryDiningIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/delivery'>Delivery</Link></ListItemText>           
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <ReceiptIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/receipt'>Reciept</Link></ListItemText>           
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/CustomerSupport'>Customer Support</Link></ListItemText>           
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <SettingsIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/settings'>Setting</Link></ListItemText>           
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText onClick={()=>setOpens(false)}><Link to='/'>Sign Out</Link></ListItemText>           
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
      </Drawer>
      <AppBar position="static" sx={{backgroundColor:"#f76f72"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>setOpens(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/'>Food App</Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

export default NavBar;