import base from './base';
import auth from './route/auth';
import global from './route/global';

const bundle = {
    init(opts) {
        const client = base.init(opts);

        return {
            global: global.init(client),
            auth: auth.init(client),
        };
    },
};

export default bundle;
