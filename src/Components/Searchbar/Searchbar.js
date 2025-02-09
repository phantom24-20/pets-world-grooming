// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import Menu from '@mui/material/Menu';
// import PinDropIcon from '@mui/icons-material/PinDrop';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import CallIcon from '@mui/icons-material/Call';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import Logo from "../../assets/DALL·E 2024-12-22 13.20.56 - A circular logo design featuring a German Shepherd dog with straight ears, (1).jpg"
// import MoreIcon from '@mui/icons-material/MoreVert';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import SearchArea from '../SearchArea/SearchArea';
// import PincodeSearch from '../PincodeSearch/PinCodeSearch';

// // Styled Components
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const navigate = useNavigate();

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const navigateToLogin = () => {
//     navigate('/login'); // Navigate to the Login page
//   };
  // const navigateToCart = () => {
  //   navigate('/cart'); // Navigate to the cart page
  // };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//      <MenuItem onClick={navigateToLogin}>Login</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem style={{ backgroundColor: '#d6dcff' }}>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={0} color="error">
//             <CallIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={0} color="error">
//             <ShoppingCartCheckoutIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={navigateToLogin}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Login</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: '#2e3144' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <img src={Logo} style={{ width: "4.5%", marginRight: "1rem", borderRadius: "30px" }} alt="logo" />

//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             PETS WORLD GROOMING
//             <div style={{ color: "wheat", fontSize: "0.80rem" }}>Paws and Claws, Love without Flaws</div>
//           </Typography>
//           {/* <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search> */}
//           <SearchArea/>
//           <div style={{display:"flex",alignItems:"center"}}>
//           <PinDropIcon />
//           {/* <Box
//             component="form"
//             sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="outlined-basic"
//               label="PinCode"
//               variant="outlined"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   color: 'white',
//                 },
//                 '& .MuiInputLabel-root': {
//                   color: 'white',
//                 },
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'white',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'white',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'white',
//                   },
//                 },
//               }}
//             />
//           </Box> */}
//           <PincodeSearch/>
//           </div>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={0} color="error">
//                 <LocalShippingIcon />
//               </Badge>
//             </IconButton>

//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={0} color="error">
//                 <CallIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               color="inherit"
//               onClick={navigateToCart} // Navigate to cart page
//             >
//               <Badge badgeContent={0} color="error">
//                 <ShoppingCartCheckoutIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"           
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

// // function ProfilePage() {
// //   return (
// //     <div>
// //       <h2>Profile Page</h2>
// //       <p>Welcome to the profile page!</p>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<PrimarySearchAppBar />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import SearchArea from '../SearchArea/SearchArea';
import PincodeSearch from '../PincodeSearch/PinCodeSearch';
import Logo from "../../assets/DALL·E 2024-12-22 13.20.56 - A circular logo design featuring a German Shepherd dog with straight ears, (1).jpg";
import ToggleMenu from '../ToggleMenu/ToggleMenu';

// Styled components for overlapping dropdowns
const SearchWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const StyledSearchArea = styled('div')(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display:'flex',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
}));

const SuggestionsContainer = styled('div')`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled('input')`
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #4caf50;
  }
`;

export default function PrimarySearchAppBar() {
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [productQuery, setProductQuery] = useState('');
  const [pincodeSuggestions, setPincodeSuggestions] = React.useState([]);
  // const [productQuery, setProductQuery] = React.useState('');
  const [pincodeQuery, setPincodeQuery] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLocationDialog, setOpenLocationDialog] = useState(false); // State for the location dialog
  const [location, setLocation] = useState(null); // State to store the current location
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = useState("in"); // Default is India
  const [isToggleMenuOpen, setIsToggleMenuOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  let debounceTimeout;

const handleProductSearch = (e) => {
  const query = e.target.value;
  setProductQuery(query);

  clearTimeout(debounceTimeout);

  if (query) {
    debounceTimeout = setTimeout(async () => {
      try {
        const response = await fetch(`https://api.yourbackend.com/products/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProductSuggestions(data.products);
      } catch (error) {
        console.error('Error fetching product suggestions:', error);
        setProductSuggestions([]);
      }
    }, 300); // Adjust the delay as needed
  } else {
    setProductSuggestions([]);
  }
};


  // Function to handle pincode search and show suggestions
  const handlePincodeSearch = async (e) => {
    const query = e.target.value;
    setPincodeQuery(query);
    
    if (query.length < 3) {
      setPincodeSuggestions([]); // Clear suggestions if query is too short
      return;
    }
    
    try {
      let response;
      let data;
      let suggestions = [];
  
      if (selectedCountry === "in" && /^\d{6}$/.test(query)) {
        // Fetch data for Indian Pincode
        response = await fetch(`https://api.postalpincode.in/pincode/${query}`);
        data = await response.json();
  
        if (data[0]?.PostOffice) {
          suggestions = data[0].PostOffice.map((item) => item.Name);
        }
      } else {
        // Fetch data for International Pincode
        response = await fetch(`https://api.zippopotam.us/${selectedCountry}/${query}`);
        data = await response.json();
  
        if (data.places) {
          suggestions = data.places.map((place) => `${place["place name"]}, ${place.state}`);
        }
      }
  
      // Update state with suggestions
      setPincodeSuggestions(suggestions.length ? suggestions : ["No results found"]);
    } catch (error) {
      console.error("Error fetching pincode details:", error);
      setPincodeSuggestions(["Error fetching data"]);
    }
  };

  // Function to handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    setPincodeQuery(suggestion); // Set selected suggestion to the input field
    setPincodeSuggestions([]); // Clear suggestions after selection
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleToggleMenu = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen); // Toggle the state when logo is clicked
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setOpenLocationDialog(false); // Close the dialog after getting location
        },
        (error) => {
          alert('Error getting location: ' + error.message);
          setOpenLocationDialog(false); // Close the dialog on error
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setOpenLocationDialog(false); // Close the dialog if geolocation is not supported
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const openContactUsPage = () => {
    window.open('/contact-us', '_blank');
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const openOrderTracking = () => {
    window.open('/order-tracking', '_blank');
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
      <MenuItem onClick={() => window.open('/login', '_blank')}>Login</MenuItem>
      {/* Navigate to AccountPage when 'My Account' is clicked */}
      <MenuItem onClick={() => navigate('/account')}>My Account</MenuItem>
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
      <MenuItem onClick={openContactUsPage}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <CallIcon />
          </Badge>
        </IconButton>
        <p>Contact Us</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <ShoppingCartCheckoutIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
  

   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2e3144' }}>
      <Toolbar>
         <ToggleMenu />
        <img
            src={Logo}
            alt="logo"
            style={{ width: '4.5%', marginRight: '1rem',marginLeft:"1rem", borderRadius: '30px', cursor: 'pointer' }}
            onClick={handleToggleMenu}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            PETS WORLD GROOMING
            <div style={{ color: 'wheat', fontSize: '0.80rem' }}>
              Paws and Claws, Love without Flaws
            </div>
          </Typography>

          <StyledSearchArea>
            <SearchInput
               type="text"
               placeholder="Search products..."
               value={productQuery}
               onChange={handleProductSearch}
            />
           {productSuggestions.length > 0 && (
              <SuggestionsContainer>
                {productSuggestions.map((product) => (
                  <div style={{ padding: '8px 16px', cursor: 'pointer' }} key={product.id}>
                  {product.name}
                  </div>
                ))}
              </SuggestionsContainer>
            )}
          </StyledSearchArea>

          <StyledSearchArea style={{color:"black"}}>
        <select 
          value={selectedCountry} 
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{ padding: "8px", marginRight: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="in">🇮🇳 India</option>
          <option value="us">🇺🇸 USA</option>
          <option value="uk">🇬🇧 UK</option>
          <option value="ca">🇨🇦 Canada</option>
          <option value="au">🇦🇺 Australia</option>
        </select>

        <SearchInput
          type="text"
          placeholder="Enter pincode..."
          value={pincodeQuery}
          onChange={handlePincodeSearch}
        />
        
        {pincodeSuggestions.length > 0 && (
          <SuggestionsContainer>
            {pincodeSuggestions.map((pincode, index) => (
              <div
                key={index}
                style={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSuggestionSelect(pincode)}
              >
                {pincode}
              </div>
            ))}
          </SuggestionsContainer>
        )}
      </StyledSearchArea>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="track orders"
              color="inherit"
              onClick={openOrderTracking}
            >
              <Badge badgeContent={0} color="error">
                <LocalShippingIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" onClick={openContactUsPage}>
              <Badge badgeContent={0} color="error">
                <CallIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              onClick={navigateToCart}
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartCheckoutIcon />
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
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <Dialog open={openLocationDialog} onClose={() => setOpenLocationDialog(false)}>
        <DialogTitle>Access Current Location</DialogTitle>
        <DialogContent>
          <Typography>
            We need your current location to provide better services. Do you want to allow access to your location?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLocationDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleGetLocation} color="primary">
            Allow
          </Button>
        </DialogActions>
      </Dialog>

    </>

    
  );
}
