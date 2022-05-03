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
    <Container maxWidth="x">
      <Toolbar
        disableGutters
        style={{ position: "relative", paddingRight: "20px" }}
      >
        <NavLink to="/">
          <div className="half-circle">
            <img className="logo" src={image} />
          </div>
        </NavLink>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{ position: "relative", left: "600%" }} />
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
                to="/signUp"
              >
                {" "}
                Our Team
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
                Our Project
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
                Contact Us
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
        ></Typography>
        <Box
          style={{ marginTop: "10px", marginLeft: "100px" }}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            variant="contained"
            onClick={handleCloseNavMenu}
            sx={{ mx: 8, color: "white", display: "block", marginLeft: "" }}
            exact
            component={NavLink}
            to="/"
          >
            Home
          </Button>
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            variant="contained"
            onClick={handleCloseNavMenu}
            sx={{ mx: 8, color: "white", display: "block", marginLeft: "" }}
            exact
            component={NavLink}
            to="/aboutUs"
          >
            About Us
          </Button>

          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            variant="contained"
            onClick={handleCloseNavMenu}
            sx={{ mx: 8, color: "white", display: "block", marginLeft: "" }}
            exact
            component={NavLink}
            to="/signUp"
          >
            Our Team
          </Button>

          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            variant="contained"
            onClick={handleCloseNavMenu}
            sx={{ mx: 8, color: "white", display: "block", marginLeft: "" }}
            exact
            component={NavLink}
            to="/signUp"
          >
            Our Project
          </Button>

          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            size="large"
            variant="contained"
            onClick={handleCloseNavMenu}
            sx={{ mx: 8, color: "white", display: "block" }}
            exact
            component={NavLink}
            to="/signUp"
          >
            Contact Us
          </Button>

          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              backgroundColor: "#E87461",
              padding: "18px 36px",
              fontSize: "4px",
              fontSize: "1vw",
            }}
            sx={{
              mx: 8,
              color: "white",
              display: "block",
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
  );
};
export default NavBarComponent;
