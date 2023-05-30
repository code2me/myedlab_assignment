import { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarTable from "./CalenderTable";
import AddPeriod from "./AddPeriod";

export default function CalendarView() {
  const currentDate = new Date();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(currentDate);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // These dates should be dynamic based on the current week
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" }); // this will give the month name
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // adds 7 days to startDate

  const handleNavigateBefore = () => {
    setStartDate(
      (prevDate) => new Date(prevDate.getTime() - 24 * 60 * 60 * 1000)
    ); // subtracts 1 day from startDate
  };

  const handleNavigateNext = () => {
    setStartDate(
      (prevDate) => new Date(prevDate.getTime() + 24 * 60 * 60 * 1000)
    ); // adds 1 day to startDate
  };

  const handleTodayClick = () => {
    setStartDate(new Date()); // sets startDate to today's date
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "20px 50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {currentMonth}
          </Typography>
          <Typography ml="10px" variant="h6">
            {startDate.getDate()} - {endDate.getDate()}
          </Typography>
          <IconButton onClick={handleNavigateBefore}>
            <NavigateBeforeIcon />
          </IconButton>
          <Button onClick={handleTodayClick}>
            <Typography variant="h6">Today</Typography>
          </Button>
          <IconButton onClick={handleNavigateNext}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
        <Button
          sx={{
            borderRadius: "20px",
          }}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
        >
          Add Period
        </Button>
        <AddPeriod open={open} handleClose={handleClose} />
      </Box>

      <CalendarTable startDate={startDate} />
    </Box>
  );
}
