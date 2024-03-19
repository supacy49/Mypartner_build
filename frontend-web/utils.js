'use strict'

const Request = require("request-promise");
const Moment = require('moment');
const Boom = require('boom');

exports.sendRequest = (request, url) => {
    let server = request.server;
    let apiRequestId = request.headers['x-api-request-id'] ||
        (Moment().format('YYYYMMDDHHmmssSSS') + _padLeft(Math.floor(Math.random() * 10000 - 1), 4));

    let headers = {
        'x-api-request-id': apiRequestId,
        'x-client-browser': clientBrowser(request.headers['user-agent']),
        'x-authorization': request.headers['x-authorization'],
        'channeltype': request.headers['channeltype'],
        'clientid': request.headers['clientid'],
        'macaddress': request.headers['macaddress']
    }
        console.log("headers => ",headers)
    let reqOptions = {

        serviceName: request.params.service,
        id: request.id,
        ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
        apiRequestId: apiRequestId,

        headers: headers,
        method: request.method,
        uri: url,
        body: request.payload,
        resolveWithFullResponse: true,
        json: true
    }

    let now = Moment();
    let logResponse = null;
    let logError = null;

    return Request(reqOptions)
        .then((response) => {
            logResponse = response;
            return response;
        }).catch((error) => {
            logError = error;
            throw error;
        }).finally(() => {
            server.emit('service', _getLoggerData(reqOptions, now, logResponse, logError));
        });
}

function clientBrowser(userAgent) {
	let tem,
	matched = userAgent.match(/(AppleWebKit|Mozilla|okhttp|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    console.log("userAgent => ",userAgent)

	if(/trident/i.test(matched[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+ (tem[1] || '');
	}

	if(matched[1] === 'Chrome'){
		tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem !== null) {
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
	}

	matched = matched[2]? [matched[1], matched[2]]: navigator?[navigator.appName, navigator.appVersion, '-?']: [];

	if((tem= userAgent.match(/version\/(\d+)/i)) !== null) {
        matched.splice(1, 1, tem[1]);
    }

	return matched[0];
}

function _padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

function _getLoggerData(reqOptions, startTime, response, error) {
    console.log(reqOptions);
    let now = Moment();
    let data = {
        name: reqOptions.serviceName,
        timestamp: now.format("YYYY-MM-DD HH:mm:ss"),
        request: {
            id: reqOptions['id'],
            ip: reqOptions['ip'],
            apiRequestId: reqOptions['apiRequestId'],
            method: reqOptions['method'],
            uri: reqOptions['uri'],
            headers: reqOptions['headers'],
            params: reqOptions['qs'],
            body: reqOptions['body']
        },
        response: {
            status: response
                ? response.statusCode
                : error.statusCode,
            body: response
                ? response.body
                : null,
            time: Moment
                .duration(now.diff(startTime))
                .asMilliseconds()
        },
        error: {
            message: error
                ? error.message
                : null,
            instance: error
                ? error.name
                : null
        }
    };
    //console.log(data);
    return data;
}

exports.replyApiResponse = (reply, response) => {
    let statusCode = response.statusCode;
    let body;
    if(statusCode === 500){
        body = Boom.badImplementation('Internal Server Error !!!!!', response.error);
    }
    else{
        body = response.error || response.body;
    }

    let res = reply(body);
    res.headers = {
        'content-type': 'application/json; charset=utf-8'
    };
    res.statusCode = statusCode;
    return res;
}
