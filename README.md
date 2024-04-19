### Svelte Retention Dashboard

This project is a demo application built using the Svelte framework. It provides a single-page dashboard for visualizing retention data retrieved from a REST API. Users can filter the data based on various criteria and view it either in a table format or as a chart.

#### Data Retrieval

The application fetches data from two endpoints:

- **Games**: Retrieves a list of games with their IDs, names, and icons.
  - Method: GET
  - URL: [https://storage.googleapis.com/estoty-temp/games.json](https://storage.googleapis.com/estoty-temp/games.json)

- **Retention**: Retrieves retention data for each game, version, and country combination.
  - Method: GET
  - URL: [https://storage.googleapis.com/estoty-temp/retention.json](https://storage.googleapis.com/estoty-temp/retention.json)

#### Layout

The application is structured into several components:

##### Filter Bar

- **Filter Game**: Allows users to select a specific game or filter games by typing part of the name.
- **Filter Version**: Enables selection of a specific version corresponding to the chosen game and country.
- **Filter Country**: Provides options to select a specific country corresponding to the chosen game and version.

##### View Bar

- **Table Button**: Switches the content area to display retention data in a tabular format.
- **Chart Button**: Switches the content area to display retention data as a vertical bar chart.

##### Content Area

- **Content Table**: Displays retention data in a table format with columns for version, country, and each day from D0 to D90. The table supports vertical and horizontal scrolling, with the header and frozen columns (version and country) always visible.
- **Content Chart**: Displays retention data as a vertical bar chart with retention percentages on the y-axis and days on the x-axis.

#### Filter Device Calculation

The number of devices displayed in the filter options is calculated based on the `days` field in the retention data. The first element of the `days` array represents the number of devices. The displayed devices are the sum of all devices corresponding to the current filter selection.

#### Dependencies

The application utilizes the following libraries:

- [Svelte](https://svelte.dev/): The reactive JavaScript framework used to build the user interface.
- [Chart.js](https://www.chartjs.org/): A JavaScript charting library for creating interactive charts.
- [svelte-select](https://github.com/sveltejs/svelte-select): A customizable select component for Svelte applications.

#### Running the Application

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/vadimsolhovojs/EstotyWebTask.git`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit your local host

Thank you for checking out the Svelte Retention Dashboard!
