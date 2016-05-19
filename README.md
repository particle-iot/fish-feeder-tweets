Particle MF Fish Tweeter
============
Stream tweet events to feed the Particle fishbowl!

### Summary

1. Clone this repository and run `npm install` inside the root of the project directory.
2. Configure your Twitter API keys (see [Keys & Secrets](#keys--secrets) below).
3. Run `npm start`.
4. Tweet! (see [Usage](#usage) below).

### Configuration

#### Keys & Secrets

You must create your own application to use the API. Please do so by going to the [Twitter Application Management](https://apps.twitter.com/) page.

* CONSUMER_KEY
* CONSUMER_SECRET
* ACCESS_TOKEN_KEY
* ACCESS_TOKEN_SECRET

You need all four of these to run the twitter stream included in `npm start`. Configuration options are detected via [nconf](https://github.com/indexzero/nconf), and you may specify them in your config.json file (placed at the root of the project directory):


#### Configuration file format
  ```js
  {
  	"consumer_key": "",
  	"consumer_secret": "",
  	"access_token_key": "",
  	"access_token_secret": "",
    "username": "",
    "password": "",
    "filter": "",
    "id": ""
  }
  ```
`username`: Your Particle username
`password`: Your Particle password
`id`: Your Particle device ID
`filter`: The Twitter search term you use to filter the tweet stream

### Installation

#### JavaScript

Just use npm to start the server!
```bash
npm start
```

### Usage

#### Tweeting
Once you have your Particle device flashed, your Twitter application
created, and your Node process running; you may tweet at the fish bowl! Use the following format:

```
<hashtag> <color>
```

Any of the following tweets are valid:

```
#ParticleFishFeeder
#ParticleFishFeeder blue
#ParticleFishFeeder yellow
#ParticleFishFeeder red
```

