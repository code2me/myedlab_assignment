import { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarTable from "./CalenderTable";

export default function CalendarView() {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(11);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // These dates should be dynamic based on the current week
  const currentYear = "2023";
  const currentMonth = "April";
  const endDate = startDate + 7;

  // convert month to numerical format
  const monthNumber =
    new Date(Date.parse(currentMonth + " 1, 2012")).getMonth() + 1;

  // convert these variables into a Date object
  const startDateFormat = new Date(
    `${currentYear}-${monthNumber}-${startDate}`
  );

  const handleNavigateBefore = () => {
    setStartDate((prevDate) => prevDate - 1);
  };

  const handleNavigateNext = () => {
    setStartDate((prevDate) => prevDate + 1);
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
          <Typography variant="h5">{currentMonth}</Typography>
          <Typography ml="10px" variant="h6">
            {startDate} - {endDate}
          </Typography>
          <IconButton onClick={handleNavigateBefore}>
            <NavigateBeforeIcon />
          </IconButton>
          <Typography variant="h6">Today</Typography>
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
        {/* <AddPeriod open={open} handleClose={handleClose} /> */}
      </Box>

      <CalendarTable startDate={startDateFormat} />
    </Box>
  );
}
