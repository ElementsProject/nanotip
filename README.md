# nanotip

[![npm release](https://img.shields.io/npm/v/nanotip.svg)](https://www.npmjs.com/package/nanotip)
[![MIT license](https://img.shields.io/github/license/elementsproject/nanotip.svg)](https://github.com/elementsproject/nanotip/blob/master/LICENSE)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![IRC](https://img.shields.io/badge/chat-on%20freenode-brightgreen.svg)](https://webchat.freenode.net/?channels=lightning-charge)

A simple web server for accepting lightning donations.

`nanotip` generates Lightning invoices on the fly using your Lightning Charge server,
allowing users to setup a tip jar that accepts Lightning Network payments.

Powered by :zap: [Lightning Charge](https://github.com/ElementsProject/lightning-charge).

![nanotip demo](https://i.imgur.com/WLoiRT2.gif)

## Setup

Setup [Lightning Charge](https://github.com/ElementsProject/lightning-charge), then:

```bash
$ npm install -g nanotip
$ nanotipd --charge-token mySecretToken # defaults: --charge-url http://localhost:9112 --port 9115
nanotipd running on http://localhost:9115
```

Note that `nanotip` uses Lightning Charge's built-in checkout page, meaning that the Lightning Charge
server has to be publicly accessible to users. If users need to access it using a different URL
than the one used for communicating with the API, set `--charge-public-url`.

You can use `--theme` to pick a different [theme from bootswatch](https://bootswatch.com).

## CLI options

```bash
$ nanotipd --help

  Lightning Tip Box

  Usage
    $ nanotipd [options]

  Options
    -c, --charge-url <url>        lightning charge server url [default: http://localhost:9112]
    -t, --charge-token <token>    lightning charge access token [required]
    -P, --charge-public-url <url> url where charge is publicly accessible [default: {charge-url}]
    -m, --theme <name>            pick theme from bootswatch.com [default: yeti]
    -l, --title <name>            website title [default: Lightning Tip Box]
    -p, --port <port>             http server port [default: 9115]
    -i, --host <host>             http server listen address [default: 127.0.0.1]
    -u, --url <url>               http server public url (used for webhooks) [default: http://{host}:{port}]
    -T, --thankyou-url <url>      url to send users to after completing the payment [default: {url}/thankyou]
    -e, --node-env <env>          nodejs environment mode [default: production]
    -h, --help                    output usage information
    -v, --version                 output version number

  Example
    $ nanotipd -c http://localhost:9112 -t chargeSecretToken
```

## License

MIT
