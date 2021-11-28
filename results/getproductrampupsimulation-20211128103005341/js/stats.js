var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles1": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles2": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "percentiles3": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles4": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
},
contents: {
"req_get-product-req-1474e": {
        type: "REQUEST",
        name: "Get product request}",
path: "Get product request}",
pathFormatted: "req_get-product-req-1474e",
stats: {
    "name": "Get product request}",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles1": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles2": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "percentiles3": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles4": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
