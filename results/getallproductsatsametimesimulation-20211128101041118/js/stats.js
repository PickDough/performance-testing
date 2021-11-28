var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "742",
        "ok": "742",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1905",
        "ok": "1905",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1245",
        "ok": "1245",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1324",
        "ok": "1324",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1439",
        "ok": "1439",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1769",
        "ok": "1769",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1878",
        "ok": "1878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
},
contents: {
"req_get-all-product-fc5a2": {
        type: "REQUEST",
        name: "Get all products request",
path: "Get all products request",
pathFormatted: "req_get-all-product-fc5a2",
stats: {
    "name": "Get all products request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "742",
        "ok": "742",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1905",
        "ok": "1905",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1245",
        "ok": "1245",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1324",
        "ok": "1324",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1439",
        "ok": "1439",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1769",
        "ok": "1769",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1878",
        "ok": "1878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
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
