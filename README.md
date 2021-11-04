# Truecallerjs
[![Version](https://img.shields.io/npm/v/truecallerjs.svg)](https://www.npmjs.com/package/truecallerjs)
[![Stars](https://img.shields.io/github/stars/sumithemmadi/truecallerjs)](https://github.com/sumithemmadi/truecallerjs/stargazers)
[![License](https://img.shields.io/npm/l/truecallerjs.svg)](https://github.com/sumithemmadi/truecallerjs/blob/main/LICENSE)
[![weekly Download](https://img.shields.io/npm/dt/truecallerjs.svg)](https://github.com/sumithemmadi/truecallerjs)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=shield)](https://github.com/sumithemmadi/truecallerjs#license)
[![Maintenance](https://img.shields.io/npms-io/maintenance-score/truecallerjs)](https://github.com/sumithemmadi/truecallerjs)
[![issues](https://img.shields.io/github/issues/sumithemmadi/truecallerjs)](https://github.com/sumithemmadi/truecallerjs/issues)
[![Known Vulnerabilities](https://snyk.io/test/npm/truecallerjs/badge.svg)](https://github.com/sumithemmadi/truecallerjs)

A simple  package to search phone number details.

## Requirements
   * Valid Mobile Number(Phone number verification for truecaller)
   * [Truecaller InstallationId](https://github.com/sumithemmadi/truecallerjs#installationId)

## Installation
For command line usage install this package globally.
```bash
npm install -g truecallerjs
```
For more help [click here](https://github.com/sumithemmadi/truecallerjs/blob/main/README.md#command-line-usage).

Or enter below command in terminal.

```bash
truecallerjs -h
```



## Command Line Usage
### Installation 
Install this npm package globally.

```bash
npm install -g  truecallerjs
```
### Login
Then  login to your truecaller account .
```bash
truecallerjs login
```
### Searching a number

```bash
truecallerjs -s [number]
```
```js
{
    "data": [
        {
            "id": "jsiebejebbeebhee/dnss00w==",
            "name": "Sumith Emmadi",
            "imId": "1g7rm006b356o",
            "gender": "UNKNOWN",
            "image": "https://storage.googleapis.com/tc-images-noneu/myview/1/jdvdidbdhvdjdvddbkdbeiebeieb",
            "score": 0.9,
            "access": "PUBLIC",
            "enhanced": true,
            "phones": [
                {
                    "e164Format": "+000000000000",
                    "numberType": "MOBILE",
                    "nationalFormat": "+000000000000",
                    "dialingCode": 91,
                    "countryCode": "IN",
                    "carrier": "Vodafone Idea",
                    "type": "openPhone"
                }
            ],
            "addresses": [
                {
                    "city": "Andhra Pradesh",
                    "countryCode": "IN",
                    "timeZone": "+05:30",
                    "type": "address"
                }
            ],
            "internetAddresses": [],
            "badges": [],
            "tags": [],
            "nameFeedback": {
                "nameSource": 1,
                "nameElectionAlgo": ""
            },
            "internetAddresses": [
                {
                    "id": "email@gmail.com",
                    "service": "email",
                    "caption": "Sumith Emmadi",
                    "type": "internetAddress"
                }
            ],
            "badges": [
                "verified",
                "user"
            ],
            "cacheTtl": "",
            "sources": [],
            "searchWarnings": [],
            "surveys": []
        }
    ],
    "provider": "ss-nu",
    "stats": {
        "sourceStats": []
    }
}
```
To get raw output.
```bash
truecallerjs -r -s [number]
```
```js
 {"data":[{"id":"jsiebejebbeebhee/dnss00w==","name":"Sumith Emmadi","imId":"1g7rm006b356o","gender":"UNKNOWN","image":"https://storage.googleapis.com/tc-images-noneu/myview/1/jdvdidbdhvdjdvddbkdbeiebeieb","score":0.9,"access":"PUBLIC","enhanced":true,"phones":[{"e164Format":"+000000000000","numberType":"MOBILE","nationalFormat":"+000000000000","dialingCode":91,"countryCode":"IN","carrier":"Vodafone Idea","type":"openPhone"}],"addresses":[{"city":"Andhra Pradesh","countryCode":"IN","timeZone":"+05:30","type":"address"}],"internetAddresses":[{"id":"email@gmail.com","service":"email","caption":"Sumith Emmadi","type":"internetAddress"}],"badges":["verified","user"],"tags":[],"nameFeedback":{"nameSource":1,"nameElectionAlgo":""},"cacheTtl":"","sources":[],"searchWarnings":[],"surveys":[]}],"provider":"ss-nu","stats":{"sourceStats":[]}}
```

To print only name.
```bash
truecallerjs -s [number] --name
```
```bash
~$ truecallerjs -s [number] --name
Name : Sumith Emmadi
```

Other command's
```bash
truecallerjs -s [number] -r --name
```

```bash
~$ truecallerjs -s [number] -r --name
Sumith Emmadi
```

### InstallationId

Enter the below command to see your **InstallationId**.
```bash
truecallerjs --installationid
```
Print only installation Id.
```bash
truecallerjs -i -r
```

## Basic Usage

#### Installation

```bash
npm install truecallerjs
```

#### Usage
```js
const truecallerjs = require('truecallerjs');

var sn = truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "TRUECALLER_INSTALLATION_ID")

sn.then(function(response) {
    console.log(JSON.stringify(response,null,4))
});

```
- Example
```js
const truecallerjs = require('truecallerjs');

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("912345678", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4))
});

```
- If you use mobile number with dialingCode.

```js
const truecallerjs = require('truecallerjs');

// truecallerjs.searchNumber("MOBILE_NUMBER", "DEFAULT_COUNTRY_CODE", "TRUECALLER_INSTALLATION_ID")

var sn = truecallerjs.searchNumber("+12122005989", 'IN', "YOUR_TRUECALLER_INSTALLATION_ID");
sn.then(function(response) {
    console.log(JSON.stringify(response,null,4));
});
```
- **MOBILE_NUMBER** : Number you want to search.
- **DEFAULT_COUNTRY_CODE** : Country code you want use by default . If mobile number is not in **E164** Format then **Default Country Code** will be considered as a countryCode of that Mobile Number.
- **TRUECALLER_INSTALLATION_ID** : To know your InstallationId , install the package globally.
-  **InstallationId**
```bash
npm install -g  truecallerjs
```
- [Login to you account](https://github.com/sumithemmadi/truecallerjs#Login).
- Enter the below command to see your **InstallationId**.

```bash
truecallerjs --installationid
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=large)](https://github.com/sumithemmadi/truecallerjs/)
