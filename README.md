# MyEdLab Assignment Calendar

This project is a simple calendar interface developed with React.js for assignment tracking. The calendar is hosted at [myedlab-assignment.vercel.app](https://myedlab-assignment.vercel.app/)

## Features

- Shows a week view starting from a chosen date.
- Provides buttons to navigate forward and backward one day at a time.
- Highlights the selected date with a blue circle.
- Displays hours in 24-hour format with color #aaaaaa.
- Allows vertical scrolling if the calendar extends beyond the viewport.
- The dates are flexible and adjustable according to your needs.

## Project Structure

The project is structured in the following way:

- `CalendarView`: This is the parent component which contains the controls for date navigation and the calendar table itself.
- `CalendarTable`: This component generates the week view table based on the current `startDate`.

## How to Run Locally

1. Clone the repository: `git clone https://github.com/user/repo.git`
2. Install the dependencies: `npm install` or `yarn`
3. Run the app: `npm start` or `yarn start`
4. Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

## Deployment

The project is deployed on Vercel at [myedlab-assignment.vercel.app](https://myedlab-assignment.vercel.app/)

## Future Enhancements

- Implement period creation and visualization.
- Add different views (Day, Month).
- Implement data persistence.

---

Please customize this README file according to your specific project requirements.
