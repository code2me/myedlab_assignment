import { format, addDays } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const hours = Array.from(Array(24).keys());

const CalendarView = ({ startDate }) => {
  console.log(startDate) 
  const startDateFormat = new Date(startDate);
  const daysOfWeek = Array.from(Array(7).keys()).map((i) =>
    addDays(startDateFormat, i)
  );

  const [selectedDate, setSelectedDate] = useState(null);

  const handleClickDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        margin: "auto",
        maxWidth: "96%",
        mt: 3,
        mb: 3,
        maxHeight: 600,
        overflow: "auto",
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderRight: "1px solid #ddd" }}></TableCell>
            {daysOfWeek.map((date) => (
              <TableCell
                key={date}
                align="center"
                sx={{
                  borderRight: "1px solid #ddd",
                  cursor: "pointer",
                  "& .selected-date": {
                    backgroundColor:
                      selectedDate &&
                      format(date, "MM/dd/yyyy") ===
                        format(selectedDate, "MM/dd/yyyy")
                        ? "#3498DB"
                        : "transparent",
                    color:
                      selectedDate &&
                      format(date, "MM/dd/yyyy") ===
                        format(selectedDate, "MM/dd/yyyy")
                        ? "#fff"
                        : "#000",
                    borderRadius:
                      selectedDate &&
                      format(date, "MM/dd/yyyy") ===
                        format(selectedDate, "MM/dd/yyyy")
                        ? "50%"
                        : "0",
                    padding: 1,
                  },
                }}
                onClick={() => handleClickDate(date)}
              >
                <Typography variant="caption">{format(date, "EEE")}</Typography>
                <Typography
                  width="50px"
                  marginLeft="37%"
                  variant="h6"
                  className="selected-date"
                >
                  {format(date, "d")}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell
                component="th"
                scope="row"
                sx={{ borderRight: "1px solid #ddd", color: "#aaaaaa" }}
              >
                {hour < 10 ? `0${hour}:00` : `${hour}:00`}
              </TableCell>
              {daysOfWeek.map((day) => (
                <TableCell
                  key={day}
                  align="right"
                  sx={{ borderRight: "1px solid #ddd" }}
                >
                  {/* Periods would go here */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalendarView;
