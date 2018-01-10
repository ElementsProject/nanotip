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
    $ bakshish [options]

  Options
    -c, --charge-url <url>        lightning charge server url [default: http://localhost:9112]
    -t, --charge-token <token>    lightning charge access token [required]
    -m, --theme <name>            pick theme from bootswatch.com [default: yeti]
    -l, --title <name>            website title [default: Lightning Tip Box]
    -p, --port <port>             http server port [default: 9112]
    -i, --host <host>             http server listen address [default: 127.0.0.1]
    -u, --url <url>               http server public url (used for webhooks) [default: http://{host}:{port}]
    -T, --thankyou-url <url>      url to send users to after completing the payment [default: {url}/thankyou]
    -P, --charge-public-url <url> url where charged is publicly accessible [default: {charge-url}]
    -e, --node-env <env>          nodejs environment mode [default: development]
    -h, --help                    output usage information
    -v, --version                 output version number

  Example
    $ bakshish -c http://localhost:9112 -t chargeSecretToken
```

## License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
