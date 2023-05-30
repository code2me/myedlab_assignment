import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarView from "./CalendarView";
import { useState } from "react";

const WeeklyView = () => {
  const [activeButton, setActiveButton] = useState("Weekly Planning");

  const handleClick = (event) => {
    setActiveButton(event.currentTarget.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "30%",
            ml: 4,
            justifyContent: "space-between",
            "& .MuiButton-root": {
              borderRadius: "20px",
              textTransform: "none",
              color: "#777",
            },
            "& .MuiButton-root:hover": {
              backgroundColor: "#E5E8FF",
            },
            "& .Mui-selected, & .Mui-selected:hover": {
              backgroundColor: "#E5E8FF",
              color: "#000",
              fontWeight: "bold",
            },
          }}
        >
          <Button
            value="Project Planning"
            onClick={handleClick}
            style={
              activeButton === "Project Planning"
                ? {
                    backgroundColor: "#E5E8FF",
                    color: "#000",
                    fontWeight: "bold",
                  }
                : null
            }
          >
            <Typography padding="10px" align="center">
              Project Planning
            </Typography>
          </Button>
          <Button
            value="Weekly Planning"
            onClick={handleClick}
            style={
              activeButton === "Weekly Planning"
                ? {
                    backgroundColor: "#E5E8FF",
                    color: "#000",
                    fontWeight: "bold",
                  }
                : null
            }
          >
            <Typography padding="10px" align="center">
              Weekly Planning
            </Typography>
          </Button>
          <Button
            value="Planning Insights"
            onClick={handleClick}
            style={
              activeButton === "Planning Insights"
                ? {
                    backgroundColor: "#E5E8FF",
                    color: "#000",
                    fontWeight: "bold",
                  }
                : null
            }
          >
            <Typography padding="10px" align="center">
              Planning Insights
            </Typography>
          </Button>
        </Box>

        <Box
          border="1px solid #dcdcdc"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "30%",
            borderRadius: "20px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for Projects"
            inputProps={{ "aria-label": "search for projects" }}
          />
        </Box>
      </Box>
      <Divider variant="middle" sx={{ width: "100%", color: "lightgray" }} />
      <CalendarView />
    </Box>
  );
};

export default WeeklyView;
