# Bakshish

A simple web server for accepting lightning donations, built on top of
[Lightning Charge](https://github.com/ElementsProject/lightning-charge)
and [c-lightning](https://github.com/ElementsProject/lightning).

## Setup

```bash
$ npm install -g bakshish lightning-charge

$ charged --api-token mySecretToken # defaults: --ln-path ~/.lightning --db-path ./charge.db --port 9112

$ bakshishd --charge-token mySecretToken # defaults: --charge-url http://localhost:9112 --port 9115
```

See [Lightning Charge](https://github.com/ElementsProject/lightning-charge) for help setting up
`bitcoind`, `lightningd` and `charged`.

## Use

```bash
$ bakshishd --help

  Lightning Tip Box

  Usage
    $ bakshishd [options]

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
    $ bakshishd -c http://localhost:9112 -t chargeSecretToken
```

## Screenshot

<img src="https://i.imgur.com/9pc0h8G.png" width="400px" alt="Bakshish screenshot">

## License

MIT
