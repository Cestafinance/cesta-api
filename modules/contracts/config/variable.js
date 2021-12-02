const driverVariables = {
    FIREBASE_KEY: 'driver',
    ACCEPT_STATUS_DEFAULT: 0,
    ACCEPT_STATUS_ACCEPTED: 1,
    ACCEPT_STATUS_REJECTED: 2,
    ACCEPT_STATUS_TIMEDOUT: 3,
    ACCEPT_STATUS_TIMEDOUT_SERVER: 4,

    ONLINE_STATUS_OFFLINE: 0,
    ONLINE_STATUS_ONLINE: 1,

    documentStatus: {
        ACTIVE: 1,
        EXPIRED: 2
    },

    blockedStatus: {
        DEFAULT: 0,
        BLOCKED: 1
    }
};


module.exports = driverVariables;