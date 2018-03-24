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

```bash
$ npm install -g nanotip lightning-charge

$ charged --api-token mySecretToken # defaults: --ln-path ~/.lightning --db-path ./charge.db --port 9112

$ nanotipd --charge-token mySecretToken # defaults: --charge-url http://localhost:9112 --port 9115
```

See [Lightning Charge](https://github.com/ElementsProject/lightning-charge) for help setting up
`bitcoind`, `lightningd` and `charged`.

## Use

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
