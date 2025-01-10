#status/wip 

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
            "refreshInputs": false,
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
                    "name": "france.tv",
                    "identifier": "france.tv"
                },
                {
                    "name": "Canal+",
                    "identifier": "CANAL+"
                },
                {
                    "name": "OQEE",
                    "identifier": "OQEE by Free"
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
                    "name": "Inverse Son",
                    "value": "AAAAAgAAAMQAAAAkAw=="
                },
                {
                    "name": "Son AudioSystem",
                    "value": "AAAAAgAAAMQAAAAiAw=="
                },
                {
                    "name": "ApplicationLauncher",
                    "value": "AAAAAgAAAMQAAAAqAw=="
                },
                {
                    "name": "Tv",
                    "value": "AAAAAQAAAAEAAAAkAw=="
                },
                {
                    "name": "ChannelUp",
                    "value": "AAAAAQAAAAEAAAAQAw=="
                },
                {
                    "name": "ChannelDown",
                    "value": "AAAAAQAAAAEAAAARAw=="
                },
                {
                    "name": "Mute",
                    "value": "AAAAAQAAAAEAAAAUAw=="
                },
                {
                    "name": "WakeUp",
                    "value": "AAAAAQAAAAEAAAAuAw=="
                },
                {
                    "name": "Up",
                    "value": "AAAAAQAAAAEAAAB0Aw=="
                },
                {
                    "name": "Down",
                    "value": "AAAAAQAAAAEAAAB1Aw=="
                },
                {
                    "name": "PhotoFrame",
                    "value": "AAAAAgAAABoAAABVAw=="
                },
                {
                    "name": "FootballMode",
                    "value": "AAAAAgAAABoAAAB2Aw=="
                }
            ],
            "displayOrder": [
                "apps",
                "commands",
                "macros",
                "inputs"
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
                    "name": "France 2",
                    "delay": 250,
                    "commands": [
                        "Num2"
                    ]
                },
                {
                    "name": "France 5",
                    "delay": 250,
                    "commands": [
                        "Num5"
                    ]
                },
                {
                    "name": "M6",
                    "delay": 250,
                    "commands": [
                        "Num6"
                    ]
                },
                {
                    "name": "NRJ 12",
                    "delay": 250,
                    "commands": [
                        "Num1",
                        "Num2"
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
                    "name": "beIN Sports 1",
                    "delay": 250,
                    "commands": [
                        "Num3",
                        "Num1"
                    ]
                },
                {
                    "name": "beIN Sports 2",
                    "delay": 250,
                    "commands": [
                        "Num3",
                        "Num2"
                    ]
                },
                {
                    "name": "beIN Sports 3",
                    "delay": 250,
                    "commands": [
                        "Num3",
                        "Num3"
                    ]
                },
		        {
		            "name": "TF1 4K",
		            "delay": 250,
		            "commands": [
		                "Num1",
		                "Num0",
		                "Num1"
		            ]
		        },
		        {
		            "name": "France 2 UHD",
		            "delay": 250,
		            "commands": [
		                "Num1",
		                "Num0",
		                "Num2"
		            ]
		        },
		        {
		            "name": "M6 4K",
		            "delay": 250,
		            "commands": [
		                "Num1",
		                "Num0",
		                "Num6"
		            ]
		        },
                {
                    "name": "beIN SPORTS Max 4",
                    "delay": 250,
                    "commands": [
                        "Num4",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "France 3 Nord Pas-de-Calais",
                    "delay": 250,
                    "commands": [
                        "Num3",
                        "Num1",
                        "Num9"
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
                    "name": "Okee france2",
                    "delay": 3500,
                    "commands": [
                        "ApplicationLauncher",
                        "Confirm",
                        "Num1",
                        "Num0",
                        "Num2"
                    ]
                },
                {
                    "name": "Okee france5",
                    "delay": 3500,
                    "commands": [
                        "ApplicationLauncher",
                        "Confirm",
                        "Num5"
                    ]
                },
                {
                    "name": " Okee bein",
                    "delay": 3500,
                    "commands": [
                        "ApplicationLauncher",
                        "Confirm",
                        "Num11",
                        "Num3",
                        "Num1",
                        "Confirm"
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

Test En cours  ✅

- [x]  Scene  homekit refait  
