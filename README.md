# Truecallerjs
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=shield)](https://github.com/sumithemmadi/truecallerjs)


A module to search phone number details with truecaller.

## Requirements
   * Valid Mobile Number( for Truecaller verification)
   * [Truecaller InstallationId](https://github.com/sumithemmadi/truecallerjs#installationId)

## Installation
For command line usage install this package globally.
```bash
npm install -g truecallerjs
```
For more help enter below command
```bash
truecallerjs -h
```

## Basic Usage

### installation

```bash
npm install truecallerjs
```

### usage
```js
const truecallerjs = require('truecallerjs');

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "YOUR_TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("912345678", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4))
});

```
If you use mobile number with dialingCode.

```js
const truecallerjs = require('truecallerjs');

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "YOUR_TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("+12122005989", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4));
});
```
- Here,mobile number is an  **US**  number  and default country code is **IN** (indian number).

- If mobile number is not in **E164** Format then **Default Country Code** will be considered as a countryCode of that Mobile Number.

## Command Line Usage
### Installation 
Install this npm package globally

```
npm install -g  truecallerjs
```
### Login
Then  login to your truecaller account 
```
truecallerjs login
```
### Searching a number
To search a number enter below command.

```
truecallerjs -s [number]
```

### InstallationId
To know your InstallationId , install the package globally.

```
npm install -g  truecallerjs
```

> After  **Successfully Login** your InstallationId will be saved as **authkey.json** in **.secret** folder of this package **node_modules**.

Enter the below command to see your **InstallationId**.
```
truecallerjs --installationid
```
or
```
truecallerjs -i
```
## Searching a number
Tor search a number enter below command.

```
truecallerjs -s [number]
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=large)](https://github.com/sumithemmadi/truecallerjs/)
