import { GET_TABLE } from '../actions/types'
const initialState = {
    rows: [
        {
            "id": 15,
            "context": "If you focus enough, maybe you could sleep early.",
            "from": "U7HMEGL3E",
            "message": "You stay up too late",
            "skillId": 501,
            "to": "UB094QN0N",
            "type": "negative",
            "createdAt": "2019-02-17T22:40:00.916Z",
            "updatedAt": "2019-02-17T22:41:02.398Z",
            "skill": {
                "name": "Focus & Concentration",
                "attribute": {
                    "name": "Professionalism"
                }
            },
            "recipientName": "Oluwafemi Adekunle",
            "senderName": "Franklin Chieze"
        },
        {
            "id": 16,
            "context": "It's all about focus!",
            "from": "U7HMEGL3E",
            "message": "You stay up too late",
            "skillId": 501,
            "to": "UB094QN0N",
            "type": "negative",
            "createdAt": "2019-02-17T22:50:53.948Z",
            "updatedAt": "2019-02-17T22:51:23.424Z",
            "skill": {
                "name": "Focus & Concentration",
                "attribute": {
                    "name": "Professionalism"
                }
            },
            "recipientName": "Oluwafemi Adekunle",
            "senderName": "Franklin Chieze"
        },
        {
            "id": 17,
            "context": "you need focus",
            "from": "U7HMEGL3E",
            "message": "You stay up too late",
            "skillId": 501,
            "to": "UB094QN0N",
            "type": "negative",
            "createdAt": "2019-02-17T22:57:18.122Z",
            "updatedAt": "2019-02-17T22:57:42.942Z",
            "skill": {
                "name": "Focus & Concentration",
                "attribute": {
                    "name": "Professionalism"
                }
            },
            "recipientName": "Oluwafemi Adekunle",
            "senderName": "Franklin Chieze"
        },
        {
            "id": 18,
            "context": "You need focus bla bla bla",
            "from": "U7HMEGL3E",
            "message": "You stay up too late",
            "skillId": 501,
            "to": "UB094QN0N",
            "type": "negative",
            "createdAt": "2019-02-17T23:10:38.268Z",
            "updatedAt": "2019-02-17T23:11:18.917Z",
            "skill": {
                "name": "Focus & Concentration",
                "attribute": {
                    "name": "Professionalism"
                }
            },
            "recipientName": "Oluwafemi Adekunle",
            "senderName": "Franklin Chieze"
        },
        {
            "id": 25,
            "context": null,
            "from": "U7HMEGL3E",
            "message": "Hi Femi, I'll be free from around 3:40pm",
            "skillId": 102,
            "to": "UB094QN0N",
            "type": "positive",
            "createdAt": "2019-02-20T16:05:14.883Z",
            "updatedAt": "2019-02-20T16:05:57.028Z",
            "skill": {
                "name": "Algorithms",
                "attribute": {
                    "name": "Quality"
                }
            },
            "recipientName": "Oluwafemi Adekunle",
            "senderName": "Franklin Chieze"
        }
    ]
}

const table = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE: 
            return state
        default: 
            return state;
    }
}

export default table;