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

### Installation

```bash
npm install truecallerjs
```

### usage
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
- **MOBILE_NUMBER** : number you want to search
- **DEFAULT_COUNTRY_CODE** :  If mobile number is not in **E164** Format then **Default Country Code** will be considered as a countryCode of that Mobile Number as show in first code.
- **TRUECALLER_INSTALLATION_ID** :  To know your InstallationId , install the package globally.
-  **InstallationId**
```bash
npm install -g  truecallerjs
```
- [Login to you account](https://github.com/sumithemmadi/truecallerjs#Login).
> After  **Successfully Login** you will see you InstallationId on screen and your installationId will be saved in **authkey.json** in **.secret** folder of this package **node_modules**.

- Enter the below command to see your **InstallationId**.
```bash
truecallerjs --installationid
```
or
```bash
truecallerjs -i
```


## Command Line Usage
### Installation 
Install this npm package globally

```bash
npm install -g  truecallerjs
```
### Login
Then  login to your truecaller account 
```bash
truecallerjs login
```
### Searching a number
To search a number enter below command.

```bash
truecallerjs -s [number]
```
```js
{
    "data": [
        {
            "id": "jsiebejebbeebhee/dnss00w==",
            "name": "Sumith Emmadi",
            "score": 0.36058196,
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
To get raw out put
```bash
truecallerjs -r -s [number]
```
```js
{"data":[{"id":"jsiebejebbeebhee/dnss00w==","name":"Sumith Emmadi","score":0.36058196,"access":"PUBLIC","enhanced":true,"phones":[{"e164Format":"+000000000000","numberType":"MOBILE","nationalFormat":"+000000000000","dialingCode":91,"countryCode":"IN","carrier":"Vodafone Idea","type":"openPhone"}],"addresses":[{"city":"Andhra Pradesh","countryCode":"IN","timeZone":"+05:30","type":"address"}],"internetAddresses":[],"badges":[],"tags":[],"nameFeedback":{"nameSource":1,"nameElectionAlgo":""},"cacheTtl":"","sources":[],"searchWarnings":[],"surveys":[]}],"provider":"ss-nu","stats":{"sourceStats":[]}}
```

To print only name 
```bash
truecallerjs -s [number] --name
```
```bash
~$ truecallerjs -s [number] --name
Name : Sumith Emmadi
```

Other command 
```bash
~$ truecallerjs -s [number] -r --name
Sumith Emmadi
```

### InstallationId

> After  **Successfully Login** your InstallationId will be saved as **authkey.json** in **.secret** folder of this package **node_modules**.

Enter the below command to see your **InstallationId**.
```bash
truecallerjs --installationid
```
or
```bash
truecallerjs -i
```

truecallerjs
## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsumithemmadi%2Ftruecallerjs.svg?type=large)](https://github.com/sumithemmadi/truecallerjs/)
