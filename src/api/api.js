import axios from "axios";

export function getSmartCityInfo() {
  return Promise.resolve({data:{
    "status": 200,
    "message": "success",
    "data": {
      "iot": {
        "name": "接入IOT设备",
        "number": 4822,
        "unit": "台"
      },
      "test": {
        "name": "今日核酸采集量",
        "number": 1874,
        "unit": "人"
      },
      "power": {
        "name": "城市电力能耗",
        "number": 96.42,
        "unit": "兆瓦时"
      },
      "event": {
        "name": "未处理治安事件",
        "number": 19,
        "unit": "起"
      }
    }
  }});
}

export function getSmartCityList() {
  return Promise.resolve({data:{
    "status": "200",
    "message": "success",
    "list": [
      {
        "name": "火警",
        "type": "存在隐患,需派人排除隐患",
        "position": {
          "x": 47,
          "y": 21
        }
      },
      {
        "name": "治安",
        "type": "出现事故，需紧急处理",
        "position": {
          "x": 24,
          "y": 68
        }
      },
      {
        "name": "电力",
        "type": "存在隐患,需派人排除隐患",
        "position": {
          "x": 10,
          "y": 20
        }
      }
    ]
  }})
}
