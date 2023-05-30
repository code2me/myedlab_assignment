import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  TimePicker,
  DialogActions,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AddPeriod({ open, handleClose }) {
  const [periodName, setPeriodName] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [repeatOn, setRepeatOn] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDaysChange = (event, newDays) => {
    setRepeatOn(newDays);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Period</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Period Name"
            fullWidth
            value={periodName}
            onChange={(e) => setPeriodName(e.target.value)}
          />
          <TimePicker
            label="Start Time"
            value={startTime}
            onChange={setStartTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="End Time"
            value={endTime}
            onChange={setEndTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box sx={{ my: 2 }}>
            <Typography>Repeat on days:</Typography>
            <ToggleButtonGroup
              color="primary"
              value={repeatOn}
              onChange={handleDaysChange}
            >
              {weekDays.map((day) => (
                <ToggleButton key={day} value={day}>
                  {day}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <DateRangePicker
            startText="From"
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            renderInput={(startProps, endProps) => (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}>-</Box>
                <TextField {...endProps} />
              </Box>
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
