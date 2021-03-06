/**
 * Created by zhangmiao on 2018/6/4.
 */
module.exports =
{
    "nested": {
        "Cmd": {
            "values": {
                "kHandsakeReq": 257,
                "kHandshakeRsp": 258,
                "kHeartTickReq": 1281,
                "kHeartTickRsp": 1282,
                "kServerStart": 4096,
                "kServerUserRegisterDisconnected": 4097,
                "kServerUserDisconnected": 4098,
                "kServerEnd": 65535,
                "kLandLordStart": 65536,
                "kLandLordJoinGameReq": 65537,
                "kLandLordJoinGameRsp": 65538,
                "kLandLordReadyGameReq": 65539,
                "kLandLordReadyGameRsp": 65540,
                "kLandLordRobLandReq": 65541,
                "kLandLordRobLandRsp": 65542,
                "kLandLordPlayCardReq": 65543,
                "kLandLordPlayCardRsp": 65544,
                "kLandLordReqCurDeskInfo": 65545,
                "kLandLordStartGameReq": 65546,
                "kLandLordStartGameRsp": 65547,
                "kLandLordDeskUpdateNty": 73728,
                "kLandLordStartGameNty": 73730,
                "kLandLordRobLandNty": 73732,
                "kLandLordSetLandLordNty": 73734,
                "kLandLordPlayCardNty": 73736,
                "kLandLordGameOverNty": 73738,
                "kLandLordGameNoLordNty": 73740,
                "kLandLordInitDeskNty": 73742,
                "kLandLordEnd": 131071
            }
        },
        "ErrCode": {
            "values": {
                "kLandLordScoreErr": 65537,
                "kLandLordPlayCardErr": 65538,
                "kLandLordUserNotJoin": 65539,
                "kLandLordUserExits": 65540,
                "kLandLordDeskExits": 65541,
                "kLandLordRobLordSeatErr": 65542
            }
        },
        "RspHead": {
            "fields": {
                "code": {
                    "type": "uint32",
                    "id": 1
                },
                "des": {
                    "type": "string",
                    "id": 2
                }
            }
        },
        "PlayerStatus": {
            "values": {
                "Normal": 1,
                "Leave": 2,
                "Offline": 3
            }
        },
        "DeskStatus": {
            "values": {
                "Ready": 1,
                "RobLorad": 2,
                "PlayCard": 3
            }
        },
        "C2SHandshakeReq": {
            "fields": {}
        },
        "S2CHandshakeRsp": {
            "fields": {}
        },
        "S2CCommonRsp": {
            "fields": {
                "rspHead": {
                    "type": "RspHead",
                    "id": 1
                }
            }
        },
        "JoinGameReq": {
            "fields": {
                "name": {
                    "type": "string",
                    "id": 1
                },
                "avatarUrl": {
                    "type": "string",
                    "id": 2
                }
            }
        },
        "JoinGameRsp": {
            "fields": {
                "rspHead": {
                    "type": "RspHead",
                    "id": 1
                },
                "deskNo": {
                    "type": "string",
                    "id": 2
                },
                "seatNo": {
                    "type": "string",
                    "id": 3
                },
                "players": {
                    "rule": "repeated",
                    "type": "PlayerInfo",
                    "id": 4
                }
            }
        },
        "StartGameReq": {
            "fields": {}
        },
        "StartGameRsp": {
            "fields": {
                "rspHead": {
                    "type": "RspHead",
                    "id": 1
                },
                "deskNo": {
                    "type": "string",
                    "id": 2
                },
                "seatNo": {
                    "type": "string",
                    "id": 3
                },
                "players": {
                    "rule": "repeated",
                    "type": "PlayerInfo",
                    "id": 4
                }
            }
        },
        "DeskInitInfo": {
            "fields": {
                "deskNo": {
                    "type": "string",
                    "id": 1
                },
                "seatNo": {
                    "type": "string",
                    "id": 2
                },
                "players": {
                    "rule": "repeated",
                    "type": "PlayerInfo",
                    "id": 3
                },
                "preSeatNo": {
                    "type": "string",
                    "id": 4
                },
                "nextSeatNo": {
                    "type": "string",
                    "id": 5
                },
                "curDeskStatus": {
                    "type": "uint32",
                    "id": 6
                },
                "curRobSeatNo": {
                    "type": "string",
                    "id": 7
                },
                "robList": {
                    "rule": "repeated",
                    "type": "string",
                    "id": 8
                },
                "landLordSeatNo": {
                    "type": "string",
                    "id": 9
                },
                "roundWinSeatNo": {
                    "type": "string",
                    "id": 10
                },
                "nextPlayCardSeat": {
                    "type": "string",
                    "id": 11
                },
                "deskRate": {
                    "type": "uint32",
                    "id": 12
                },
                "cards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 13
                },
                "hiddenCards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 14
                },
                "winCards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 15
                },
                "isAudience": {
                    "type": "bool",
                    "id": 16
                }
            }
        },
        "PlayerInfo": {
            "fields": {
                "name": {
                    "type": "string",
                    "id": 1
                },
                "uid": {
                    "type": "uint64",
                    "id": 2
                },
                "isReady": {
                    "type": "bool",
                    "id": 3
                },
                "deskNo": {
                    "type": "string",
                    "id": 4
                },
                "seatNo": {
                    "type": "string",
                    "id": 5
                },
                "preSeatNo": {
                    "type": "string",
                    "id": 6
                },
                "nextSeatNo": {
                    "type": "string",
                    "id": 7
                },
                "score": {
                    "type": "uint32",
                    "id": 8
                },
                "cardCount": {
                    "type": "uint32",
                    "id": 9
                },
                "robLandScore": {
                    "type": "uint32",
                    "id": 10
                },
                "avatarUrl": {
                    "type": "string",
                    "id": 11
                },
                "lastPlayCards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 12
                }
            }
        },
        "StartGameNty": {
            "fields": {
                "firstRob": {
                    "type": "string",
                    "id": 1
                },
                "cards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 2
                }
            }
        },
        "CardInfo": {
            "fields": {
                "type": {
                    "type": "string",
                    "id": 1
                },
                "val": {
                    "type": "uint32",
                    "id": 2
                }
            }
        },
        "RobLandReq": {
            "fields": {
                "score": {
                    "type": "uint32",
                    "id": 1
                }
            }
        },
        "RobLandRsp": {
            "fields": {
                "rspHead": {
                    "type": "RspHead",
                    "id": 1
                }
            }
        },
        "DeskUpdateNty": {
            "fields": {
                "players": {
                    "rule": "repeated",
                    "type": "PlayerInfo",
                    "id": 1
                }
            }
        },
        "RobLandInfoNty": {
            "fields": {
                "preSeatNo": {
                    "type": "string",
                    "id": 1
                },
                "preScore": {
                    "type": "uint32",
                    "id": 2
                },
                "currentScore": {
                    "type": "uint32",
                    "id": 3
                },
                "nextSeat": {
                    "type": "string",
                    "id": 4
                }
            }
        },
        "SetLandLordNty": {
            "fields": {
                "currentScore": {
                    "type": "uint32",
                    "id": 1
                },
                "landLordSeatNo": {
                    "type": "string",
                    "id": 2
                },
                "hiddenCards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 3
                }
            }
        },
        "PlayCardReq": {
            "fields": {
                "cards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 1
                }
            }
        },
        "PlayCardRsp": {
            "fields": {
                "rspHead": {
                    "type": "RspHead",
                    "id": 1
                }
            }
        },
        "PlayCardNty": {
            "fields": {
                "preSeatNo": {
                    "type": "string",
                    "id": 1
                },
                "nextSeatNo": {
                    "type": "string",
                    "id": 2
                },
                "rate": {
                    "type": "uint32",
                    "id": 3
                },
                "cards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 4
                }
            }
        },
        "GameOverNty": {
            "fields": {
                "winnerSeatNo": {
                    "type": "string",
                    "id": 1
                },
                "landLordSeatNo": {
                    "type": "string",
                    "id": 2
                },
                "currentScore": {
                    "type": "string",
                    "id": 3
                },
                "rate": {
                    "type": "uint32",
                    "id": 4
                },
                "cards": {
                    "rule": "repeated",
                    "type": "CardInfo",
                    "id": 5
                },
                "players": {
                    "rule": "repeated",
                    "type": "PlayerInfo",
                    "id": 6
                }
            }
        }
    }
}