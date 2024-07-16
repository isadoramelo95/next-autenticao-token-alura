export async function HttpClient(fetchUrl, fetchOptions) {
    const options = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    };
    // console.log('options', options);
    return fetch(fetchUrl, options)
        .then(async (respostaDoServidor) => {
            return {
                ok: respostaDoServidor.ok,
                body: await respostaDoServidor.json(),
            };
        });
}