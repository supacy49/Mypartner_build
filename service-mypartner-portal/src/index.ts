import * as Hapi from 'hapi';
import * as Glue from 'glue';

let defaultPort: number = 8080;

const CONFIG: any = {
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || defaultPort,
    LOG: JSON.parse(process.env.LOG),
    SECRET_KEY: process.env.SECRET_KEY || 'secretKey',
    AIS_SERVICE_NAMES: JSON.parse(process.env.AIS_SERVICE_NAMES),
    SSB_PROFILE_REGIS: JSON.parse(process.env.SSB_PROFILE_REGIS)
};

const manifest: any = {
    server: {},
    connections: [
        {
            host: CONFIG.HOST,
            port: CONFIG.PORT
        }
    ],
    registrations: [
        {
            plugin: {
                register: 'hapi-alive',
                options: {
                    path: '/',
                    tags: [
                        'health', 'monitor'
                    ],
                    healthCheck: (server, callback) => {
                        // Here you should preform your health checks If something went wrong provide
                        // the callback with an error  
                        callback();
                    }
                }
            }
        }, {
            plugin: {
                register: 'hapi-mongoose',
                options: {
                    bluebird: true,
                    uri: process.env.DB_URL
                }
            }
        }, {
            plugin: {
                register: 'mypartner-plugin',
                options: {
                    headers: CONFIG.SSB_PROFILE_REGIS.HEADERS,
                    urlList: CONFIG.SSB_PROFILE_REGIS.URL_LIST,
                    baseUrl: CONFIG.SSB_PROFILE_REGIS.BASE_URL,
                    authUrl: CONFIG.SSB_PROFILE_REGIS.AUTH_URL,
                    cpcUrl: CONFIG.SSB_PROFILE_REGIS.CPC_URL, 
                    tdmUrl: CONFIG.SSB_PROFILE_REGIS.TDM_URL,    
                    arsUrl: CONFIG.SSB_PROFILE_REGIS.ARS_URL,
                   
                    timeout: CONFIG.SSB_PROFILE_REGIS.TIMEOUT,
                    token: CONFIG.SSB_PROFILE_REGIS.TOKEN,
                    cron: CONFIG.SSB_PROFILE_REGIS.CRON,
                    errorPrefixCode: CONFIG.SSB_PROFILE_REGIS.ERROR_PREFIX_CODE,
                    eventName: 'service'
                }
            }
        },
        {
            plugin: 'mypartner-route'
        },
        {
            plugin: {
                register: 'mychannel-logger',
                options: {
                    log: {
                        path: CONFIG.LOG.PATH,
                        rotateTime: '15',
                        serviceNames: CONFIG.AIS_SERVICE_NAMES
                    },
                    headers: [
                        'postman-token', 'user-agent'
                    ],
                    hiddenFields: ['password']
                }
            }
        }
    ]
};

const options: any = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err: any, server: Hapi.Server) => {

    if (err) {
        throw err;
    }

    server.start(() => {
        console.log('server start with configuration', CONFIG);
        server.log('server start with configuration', CONFIG);

    });


});
