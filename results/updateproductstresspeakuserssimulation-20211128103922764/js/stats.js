var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "315",
        "ok": "315",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "percentiles2": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles3": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
},
contents: {
"req_update-product--8b1fd": {
        type: "REQUEST",
        name: "Update product request",
path: "Update product request",
pathFormatted: "req_update-product--8b1fd",
stats: {
    "name": "Update product request",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "315",
        "ok": "315",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "percentiles2": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles3": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
