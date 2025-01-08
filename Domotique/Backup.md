# 2025-01-08

## Bravia-TV-OS 
pour refaire proprement  car erreur dans les log: 

### stacktrace

``` fold unwrap
[08/01/2025, 18:42:00] [BraviaTVOS] M 4k: ON
[08/01/2025, 18:42:00] [BraviaTVOS] M 4k: An error occured during setting active identifier
[08/01/2025, 18:42:00] [BraviaTVOS] TypeError: Cannot read properties of undefined (reading 'type')
    at Handler.setActiveIdentifier (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/accessory.h                                 andler.js:168:17)
    at ActiveIdentifier.setHandler (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/television/                                 television.accessory.js:157:38)
    at ActiveIdentifier.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Charac                                 teristic.ts:2552:42)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at ActiveIdentifier.Characteristic.handleSetRequest (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-n                                 odejs/dist/lib/Characteristic.js:875:24)
    at Accessory.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Accessory.ts:                                 1907:29)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at Accessory.handleCharacteristicWrite (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/dist/li                                 b/Accessory.js:1562:24)
[08/01/2025, 18:42:00] [BraviaTVOS] M 4k: ON

```

### Backup settings

```json title:settings

{
    "name": "BraviaTVOS",
    "platform": "BraviaOSPlatform",
    "debug": false,
    "warn": true,
    "error": true,
    "extendedError": true,
    "tvs": [
        {
            "active": true,
            "name": "M 4k",
            "ip": "192.168.0.191",
            "port": 80,
            "psk": "sony",
            "manufacturer": "Sony Corporation",
            "model": "BRAVIA KD-55X85L",
            "serialNumber": "5001107",
            "refreshInputs": true,
            "wol": false,
            "oldModel": false,
            "polling": 60,
            "sheduledRefresh": 12,
            "inputs": [
                {
                    "name": "Freebox",
                    "identifier": "HDMI 4",
                    "source": "hdmi"
                },
                {
                    "name": "BD System",
                    "identifier": "BD SYSTEM",
                    "source": "cec"
                },
                {
                    "name": "eARC",
                    "identifier": "HDMI 3 (eARC/ARC)",
                    "source": "hdmi"
                }
            ],
            "apps": [
                {
                    "name": "OQEE",
                    "identifier": "OQEE by Free"
                },
                {
                    "name": "Canal+",
                    "identifier": "CANAL+"
                },
                {
                    "name": "france.tv",
                    "identifier": "france.tv"
                },
                {
                    "name": "Spotify",
                    "identifier": "Spotify"
                },
                {
                    "name": "Notification Bravia",
                    "identifier": "Notifications BRAVIA"
                }
            ],
            "commands": [
                {
                    "name": "Confirm",
                    "value": "AAAAAQAAAAEAAABlAw=="
                },
                {
                    "name": "Return",
                    "value": "AAAAAgAAAJcAAAAjAw=="
                },
                {
                    "name": "AudioOutput_Toggle",
                    "value": "AAAAAgAAAMQAAAAkAw=="
                },
                {
                    "name": "AudioOutput_AudioSystem",
                    "value": "AAAAAgAAAMQAAAAiAw=="
                }
            ],
            "displayOrder": [
                "inputs",
                "macros",
                "commands",
                "apps"
            ],
            "speaker": {
                "active": false,
                "output": "speaker",
                "increaseBy": 2,
                "reduceBy": 2,
                "accType": "switch"
            },
            "macros": [
                {
                    "name": "France2 4k",
                    "delay": 250,
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "France3 4k",
                    "delay": 250,
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num4"
                    ]
                },
                {
                    "name": "okee france2",
                    "commands": [
                        "ApplicationLauncher",
                        "Confirm",
                        "Num1",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "Chaine Suivante",
                    "commands": [
                        "ChannelUp"
                    ]
                },
                {
                    "name": "Chaine Précédente",
                    "commands": [
                        "ChannelDown"
                    ]
                },
                {
                    "name": "France 5",
                    "commands": [
                        "Num5"
                    ]
                },
                {
                    "name": "M6 4k",
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num6"
                    ]
                },
                {
                    "name": "M6",
                    "commands": [
                        "Num6"
                    ]
                },
                {
                    "name": "L'équipe 21",
                    "commands": [
                        "Num2",
                        "Num1"
                    ]
                },
                {
                    "name": "Bein Sport",
                    "commands": [
                        "Num3",
                        "Num1"
                    ]
                }
            ],
            "remote": []
        }
    ]
}

```


### Nouveau paramétrage
```json
{
    "name": "BraviaTVOS",
    "platform": "BraviaOSPlatform",
    "debug": false,
    "warn": true,
    "error": true,
    "extendedError": true,
    "tvs": [
        {
            "active": true,
            "name": "M 4k",
            "ip": "192.168.0.191",
            "mac": "88:C9:E8:AB:98:4C",
            "port": 80,
            "psk": "sony",
            "manufacturer": "Sony Corporation",
            "model": "BRAVIA KD-55X85L",
            "serialNumber": "5001107",
            "refreshInputs": true,
            "wol": false,
            "oldModel": false,
            "polling": 60,
            "sheduledRefresh": 12,
            "inputs": [
                {
                    "name": "Freebox",
                    "identifier": "Freebox Player",
                    "source": "cec"
                },
                {
                    "name": "eARC",
                    "identifier": "HDMI 3 (eARC/ARC)",
                    "source": "hdmi"
                }
            ],
            "apps": [
                {
                    "name": "OQEE",
                    "identifier": "OQEE by Free"
                },
                {
                    "name": "Canal+",
                    "identifier": "CANAL+"
                }
            ],
            "commands": [
                {
                    "name": "Confirm",
                    "value": "AAAAAQAAAAEAAABlAw=="
                },
                {
                    "name": "Return",
                    "value": "AAAAAgAAAJcAAAAjAw=="
                },
                {
                    "name": "AudioOutput_Toggle",
                    "value": "AAAAAgAAAMQAAAAkAw=="
                },
                {
                    "name": "AudioOutput_AudioSystem",
                    "value": "AAAAAgAAAMQAAAAiAw=="
                },
                {
                    "name": "ApplicationLauncher",
                    "value": "AAAAAgAAAMQAAAAqAw=="
                },
                {
                    "name": "PartnerApp1",
                    "value": "AAAAAgAACB8AAAAAAw=="
                }
            ],
            "displayOrder": [
                "inputs",
                "macros",
                "commands",
                "apps"
            ],
            "speaker": {
                "active": true,
                "output": "speaker",
                "increaseBy": 2,
                "reduceBy": 2,
                "accType": "switch"
            },
            "macros": [
                {
                    "name": "France2 4k",
                    "delay": 250,
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "France3 4k",
                    "delay": 250,
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num4"
                    ]
                },
                {
                    "name": "okee france2",
                    "commands": [
                        "ApplicationLauncher",
                        "Confirm",
                        "Num1",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "Chaine Suivante",
                    "commands": [
                        "ChannelUp"
                    ]
                },
                {
                    "name": "Chaine Précédente",
                    "commands": [
                        "ChannelDown"
                    ]
                },
                {
                    "name": "France 5",
                    "commands": [
                        "Num5"
                    ]
                },
                {
                    "name": "M6 4k",
                    "commands": [
                        "Num1",
                        "Num0",
                        "Num6"
                    ]
                },
                {
                    "name": "M6",
                    "commands": [
                        "Num6"
                    ]
                },
                {
                    "name": "L'équipe 21",
                    "commands": [
                        "Num2",
                        "Num1"
                    ]
                },
                {
                    "name": "Bein Sport",
                    "commands": [
                        "Num3",
                        "Num1"
                    ]
                }
            ],
            "remote": [
                {
                    "command": "VolumeUp",
                    "target": "VOLUME_UP"
                }
            ]
        }
    ]
}
```
### Résultat 

```
[08/01/2025, 20:08:37] [BraviaTVOS] M 4k: An error occured during setting active identifier
[08/01/2025, 20:08:37] [BraviaTVOS] TypeError: Cannot read properties of undefined (reading 'type')
    at Handler.setActiveIdentifier (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/accessory.handler.js:168:17)
    at ActiveIdentifier.setHandler (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/television/television.accessory.js:157:38)
    at ActiveIdentifier.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Characteristic.ts:2552:42)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at ActiveIdentifier.Characteristic.handleSetRequest (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/dist/lib/Characteristic.js:875:24)
    at Accessory.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Accessory.ts:1907:29)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at Accessory.handleCharacteristicWrite (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/dist/lib/Accessory.js:1562:24)
[08/01/2025, 20:08:37] [BraviaTVOS] M 4k: ON
[08/01/2025, 20:08:47] [BraviaTVOS] M 4k: An error occured during setting active identifier
[08/01/2025, 20:08:47] [BraviaTVOS] TypeError: Cannot read properties of undefined (reading 'type')
    at Handler.setActiveIdentifier (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/accessory.handler.js:168:17)
    at ActiveIdentifier.setHandler (/var/lib/homebridge/node_modules/homebridge-bravia-tvos/src/accessories/television/television.accessory.js:157:38)
    at ActiveIdentifier.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Characteristic.ts:2552:42)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at ActiveIdentifier.Characteristic.handleSetRequest (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/dist/lib/Characteristic.js:875:24)
    at Accessory.<anonymous> (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/src/lib/Accessory.ts:1907:29)
    at step (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:195:27)
    at Object.next (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:176:57)
    at /var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:169:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/var/lib/homebridge/node_modules/homebridge/node_modules/tslib/tslib.js:165:16)
    at Accessory.handleCharacteristicWrite (/var/lib/homebridge/node_modules/homebridge/node_modules/hap-nodejs/dist/lib/Accessory.js:1562:24)
[08/01/2025, 20:08:47] [BraviaTVOS] M 4k: ON
```

### a suivre
