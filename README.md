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
For more help [click here](https://github.com/sumithemmadi/truecallerjs/blob/main/README.md#command-line-usage) 

Or enter below command in terminal.
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

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("912345678", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4))
});

```
If you use mobile number with dialingCode.

```js
const truecallerjs = require('truecallerjs');

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("+12122005989", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4));
});
```
- **MOBILE_NUMBER** : number you want to search
- **DEFAULT_COUNTRY_CODE** :  If mobile number is not in **E164** Format then **Default Country Code** will be considered as a countryCode of that Mobile Number as show in first code.
- **TRUECALLER_INSTALLATION_ID** : To know your installationId  [click here](https://github.com/sumithemmadi/truecallerjs#installationId).

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


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=large)](https://github.com/sumithemmadi/truecallerjs/)
