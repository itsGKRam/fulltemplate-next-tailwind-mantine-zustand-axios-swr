const global = {
    init(base) {
        return {
            get(url, queryParams, contentType) {
                return base.get(url, queryParams ?? null, contentType ?? null);
            },
            post(url, queryParams, data, contentType) {
                return base.post(
                    url,
                    queryParams ?? null,
                    data,
                    contentType ?? null,
                );
            },
            patch(url, queryParams, data, contentType) {
                return base.patch(
                    url,
                    queryParams ?? null,
                    data,
                    contentType ?? null,
                );
            },
            put(url, queryParams, data, contentType) {
                return base.put(
                    url,
                    queryParams ?? null,
                    data,
                    contentType ?? null,
                );
            },
            delete(url, queryParams, data, contentType) {
                return base.delete(
                    url,
                    queryParams ?? null,
                    data,
                    contentType ?? null,
                );
            },
            url() {
                return base.url();
            },
        };
    },
};

export default global;
