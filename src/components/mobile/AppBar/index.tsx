import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { style } from "@/styles/globals";
import SearchIcon from "@mui/icons-material/Search";

import VnFlagIcon from "../../../../public/icon/vn-flag.svg";
import EnFlagIcon from "../../../../public/icon/vn-flag.svg";
import Image from "next/image";
import useTrans from "@/hooks/useTrans";
import { LOCALE_ENUM } from "@/utils/constants";

const Container = styled("div")`
  background: ${({ theme }) => theme?.colors.primary};
  max-width: "100% !important";
`;

const MenuListItem = styled("div")`
  background: ${({ theme }) => theme?.colors.primary2};
  color: ${({ theme }) => theme?.colors.white};
`;

const pages = ["Products", "Pricing", "Blog", "Products", "Pricing", "Blog"];
function ResponsiveAppBar({ isSearchPage }: { isSearchPage?: boolean }) {
  const { t, locale, setLocale } = useTrans();
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar
            disableGutters
            style={{
              marginLeft: "5px",
            }}
          >
            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setShowMenu(!showMenu)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box> */}
            <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              vncreatures
            </Typography>
            {/* {!isSearchPage && (
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            )} */}
            <IconButton size="large" aria-label="search" color="inherit">
              <Image
                priority
                src={locale === LOCALE_ENUM.VN ? VnFlagIcon : EnFlagIcon}
                alt="Flag"
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {showMenu && (
        <MenuListItem>
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => setShowMenu(false)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </MenuListItem>
      )}
    </div>
  );
}
export default ResponsiveAppBar;
