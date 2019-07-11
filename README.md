# node-worldtime

This command-line application was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany. It consumes the [World Time API](http://worldtimeapi.org).

## Features

It has three main modes:
- showing a thank you message
- showing a list of timezones
- showing the current time for a given timezone

## Techniques

- JavaScript
- Node.js

## Manual

### Setup of the package

1. Clone the repository using ```git clone git@github.com:sklinkusch/node-worldtime.git``` (SSH) or ```git clone https://github.com/sklinkusch/node-worldtime``` (HTTPS).
1. Move into the directory ```node-worldtime``` and run ```npm install``` or ```yarn```.

### Making requests

#### Showing help text
Type: ```node index.js --help```. The output is
```
You need to provide an area (continent) and a major city.
```

#### Showing list of timezones
Type ```node index.js --options```. The output is a list of timezones:
```
{ area: 'Africa', region: 'Abidjan', city: undefined }
{ area: 'Africa', region: 'Accra', city: undefined }
{ area: 'Africa', region: 'Algiers', city: undefined }
{ area: 'Africa', region: 'Bissau', city: undefined }
{ area: 'Africa', region: 'Cairo', city: undefined }
...
{ area: 'Pacific', region: 'Tarawa', city: undefined }
{ area: 'Pacific', region: 'Tongatapu', city: undefined }
{ area: 'Pacific', region: 'Wake', city: undefined }
{ area: 'Pacific', region: 'Wallis', city: undefined }
{ area: 'WET', region: undefined, city: undefined }
```

#### Showing current time for a given timezone

Type ```node index.js $AREA $REGION $CITY``` with ```$AREA``` as a continent/area from the list, ```$REGION``` as a matching region or city and ```$CITY``` as a matching city from the list (area, region, and city should appear as a valid triplet). The last two parameters can be omitted, if they are not defined for a timezone, e.g. ```node index.js Europe Berlin```. The output should look like
```
11.07.2019 10:46:39
```