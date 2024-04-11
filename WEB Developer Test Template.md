### Description

Using Svelte framework (https://svelte.dev/) create demo app based on details below.
Put results to public git repo and send link or export source artifacts and send as .zip archive.


#### Data
on application load retrieve data via REST API call

- games
    - method: GET
    - url: https://storage.googleapis.com/estoty-temp/games.json
    - no auth required
    - response schema: 
    ```
        [
            {
                app_id: string, 
                name: string, 
                icon: string
            }
        ]
    ```


- retention
    - method GET
    - url: https://storage.googleapis.com/estoty-temp/retention.json
    - no auth required
    - schema: 
      ```
        [
            {
                app_id: string,
                app_ver: string,
                country: string:
                days: [
                    <devices>: integer
                ]
            }
        ]
      ```

#### Layout
Build Single Page application with following elements (details for each element below)

##### Application
- filter bar
- view bar
- content area

##### Filter Bar
- filter game
- filter version
- filter country

##### Filter Game
- Dropdown should display list of all games and value "All"
- Display format:
 ```
    All
    or
    <icon> <name>
```
- By default "All" value set.
- Value All should be displayed on top, then games sorted alphabetically ascending
- Should be possible to pick game by selecting value from dropdown list
- Should be possible to filter names by typing part of name (case insensitive match)

##### Filter Version
- Dropdown should display list of versions corresponding to currently selected game/country and value "All"
  (for values use list of app_ver from retention data)
- Display format:
 ```
    All
    or
    <app_ver> (<devices>)

    where <devices> calculated by rule in section Filter Device calculation
```
- By default "All" value set.
- Value All should be displayed on top, then versions sorted numerically descending
- Should be possible to pick version by selecting value from dropdown list
- Should be possible to filter versions by typing part of version (case insensitive match)

##### Filter Country
- Dropdown should display list of countries corresponding to currently selected game/version and value "All"
  (get list of country values from retention data)
- Display format:
 ```
    All
    or
    <country> (<devices>)

    where 
        <devices> calculated by rule in section Filter Device calculation
        <country> - for long values trim value, but display full value on hover
```
- By default "All" value set.
- Value All should be displayed on top, then countries sorted numerically descending by devices
- Should be possible to pick country by selecting value
- Should be possible to filter country by typing part of country (case insensitive match)


##### Filter Device calculation
In retention data for each array item get field "days".
The field is array, where the first element (index=0) should be used as number of devices.
Devices that displayed in filter should be sum of all devices corresponding to current selection.

E.g.
```
sample data:
    app_id: 1, app_ver: 1.0.0,  country: country1, devices: [10, ...]
    app_id: 1, app_ver: 1.0.0,  country: country2: devices: [5, ...]
    app_id: 1, app_ver: 2.0.0,  country: country1: devices: [20, ...]

sample filter data:
    game with app_id = 1 selected

    if nothing else is filtered (All values used for version/country)
        for version filter display
            1.0.0 (15)
            2.0.0 (20)

        for country filter display
            country1 (30)
            country2 (5)
    
    if selected app_ver = 1.0.0, country = All
        for version filter display
            1.0.0 (15)
        for country filter display
            country1 (10)
            country2 (5)

    if selected app_ver = All, country = country_2
        for version filter display
            1.0.0 (5)
        for country filter display
            country2 (5)
```


#### View Bar
- button Table
    if pressed content area should display content with Retention table
- button Chart
    if pressed content area should display content with Retention chart


##### Content Table
- display table with columns Version, Country, D0..D90
- data = retention data filtered by current filter selection (game/version/country)
- Version column = app_ver
- Country column = country
- D0..D90 column:
```
    data is retention which is calculated based on days field

    D<X> - is retention at day X =  days[x] / days[0] * 100
        round % till integer

    e.g.
        days field = [50, 25, ....]
        D0 =  50 / 50 * 100 = 100%
        D1 =  25 / 50 * 100 = 50%
        ...
```
- add vertical scrolling e.g. show scroll if content longer than 20 rows
- add horizontal scrolling e.g. show scroll for columns > D20
- freeze header with column names and freeze columns Version, Country
    - when scrolling vertically - row with column names always displayed
    - when scrolling horizontally - columns version/country always displayed
    - highlight frozen columns with some color e.g. grey background

##### Content Chart
Display vertical bar chart  e.g. can use chart.js library (https://www.chartjs.org/)
- x scale: labels D0, D5, D10, D20, D25, D30, D60, D90
- y scale: retention % [0..100]
- series - versions
- series value retention at specified day
    ```
        retention =  (days[x] / days[0]) * 100
    ```