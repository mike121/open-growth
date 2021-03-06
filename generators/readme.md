# Open Growth Generators

Generators provide signals to your signal handlers.
These signals can be used to send delights to your customers!

`Signal Generator` `>` `Signal Processor`

Generators are currently written for Heroku.
Future plans to support BLOCKS infrastructure.

### Heroku Security File

`.env` file must be supplied for local dev testing.

```shell
PUBKEY=YOUR KEY HERE
SUBKEY=YOUR KEY HERE
SECKEY=YOUR KEY HERE
OTHER=YOUR OTHER KEY HERE
```

Production requires you to set ENV vars via `heroku` command.

```shell
heroku config:set PUBKEY=YOUR KEY HERE
heroku config:set SUBKEY=YOUR KEY HERE
heroku config:set SECKEY=YOUR KEY HERE
heroku config:set OTHER=YOUR OTHER KEY HERE
```

### Adding a Heroku Worker

 1. Add `your_generator_name: python yourfile.py` to `Procfile`.
 2. Setup your script to run in a runloop or find a way to run Cron style.
 3. Git Commit and then run `./deploy-heroku`.
 4. Start your worker by running `heroku ps:scale your_generator_name=1`.

### Adding a Heroku Web HTTP Endpoint

 1. Copy `salesforce.js` to `yourfile.js` Must be JavaScript for Web HTTP Endpoint.
 2. Edit the Endpoint Details in the file to accept `GET` or `POST` requests.
 3. Git Commit and then run `./deploy-heroku`.
