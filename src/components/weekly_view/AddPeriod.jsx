import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { TimePicker, DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const colorOptions = ["#F8EBF1", "#E9E8FD", "#FFFBDA", "#CFFFF1"];

export default function AddPeriod({ open, handleClose }) {
  const [periodName, setPeriodName] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [repeatOn, setRepeatOn] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const handleDaysChange = (day) => {
    if (repeatOn.includes(day)) {
      setRepeatOn(repeatOn.filter((d) => d !== day));
    } else {
      setRepeatOn([...repeatOn, day]);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Period</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mb: 3 }}
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
            sx={{ ml: 3 }}
            label="End Time"
            value={endTime}
            onChange={setEndTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box sx={{ my: 2 }}>
            <Typography>Repeat on days:</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {weekDays.map((day) => (
                <Chip
                  key={day}
                  label={day}
                  clickable
                  color={repeatOn.includes(day) ? "primary" : "default"}
                  onClick={() => handleDaysChange(day)}
                  variant="outlined"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <Box sx={{ mx: 1, mt: 2 }}>to</Box>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={setEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>Choose color:</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {colorOptions.map((color) => (
                <Chip
                  key={color}
                  clickable
                  color={selectedColor === color ? "primary" : "default"}
                  onClick={() => handleColorChange(color)}
                  variant="outlined"
                  sx={{
                    m: 1,
                    p: 2,
                    background: color,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                  }}
                  avatar={
                    selectedColor === color ? (
                      <Avatar
                        sx={{
                          p: 2,
                          background: color,
                        }}
                      >
                        <CheckOutlinedIcon sx={{ color: color }} />
                      </Avatar>
                    ) : null
                  }
                />
              ))}
            </Box>
          </Box>
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
