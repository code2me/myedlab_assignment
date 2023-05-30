import { Box, Typography, IconButton, Avatar, Paper } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CategoryIcon from "@mui/icons-material/Category";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";

import Ivan from "../../assets/header/Ivan.png";

const Header = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div">
            Educator
          </Typography>
          <Typography variant="body2" component="span" color="#aaaaaa">
            Arthshala
          </Typography>
        </Box>
        <IconButton size="small">
          <ArrowDropDownIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <IconButton size="large">
            <CategoryIcon />
          </IconButton>
          <Typography variant="body2">Planning</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <IconButton size="large">
            <EditIcon />
          </IconButton>
          <Typography variant="body2">Documentation</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <IconButton size="large">
            <AssignmentIcon />
          </IconButton>
          <Typography variant="body2">HouseKeeping</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="large">
          <SearchIcon />
        </IconButton>
        <IconButton size="large">
          <NotificationsIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Ivan" src={Ivan} />
          <IconButton size="small">
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Header;
