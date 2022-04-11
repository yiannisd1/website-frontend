import { NavLink } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import image from "../../../../src/assets/logo-redback.png";

const NavBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#e87461" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <NavLink to="/" style={{ color: "white" }}>
              <Box
                component="img"
                sx={{
                  height: 80,
                }}
                alt=" logo."
                src={image}
              />
            </NavLink>
          </Typography>

          <Box sx={{ pl: 2, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" exact component={NavLink} to="/">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  exact
                  component={NavLink}
                  to="/aboutUs"
                >
                  About Us
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  exact
                  component={NavLink}
                  to="/loginIn"
                >
                  {" "}
                  Login In
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  exact
                  component={NavLink}
                  to="/signUp"
                >
                  {" "}
                  Create Account
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "white" },
            }}
            exact
            component={NavLink}
            to="/"
          >
            <Box
              component="img"
              style={{ color: "#e87461" }}
              sx={{
                height: 70,
                color: "#e87461",
              }}
              alt="Your logo."
              src={image}
            />
          </Typography>
          <Box
            sx={{ pl: 15, flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              exact
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ pl: "15%", my: 2, color: "white", display: "block" }}
              exact
              component={NavLink}
              to="/aboutUs"
            >
              About Us
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ pl: "15%", my: 2, color: "white", display: "block" }}
              exact
              component={NavLink}
              to="/signUp"
            >
              Create Account
            </Button>

            <Button
              sx={{
                pl: 15,
                my: 2,
                color: "white",
                display: "block",
                position: "absolute",
                left: "85%",
              }}
              exact
              component={NavLink}
              to="/loginIn"
            >
              Login
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarComponent;
