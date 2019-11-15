const Settings = {
    app: {
        context: '/store',
        customUrl: {
            enabled: false,
            forwardedHeader: 'X-Forwarded-For',
        },
        origin: {
            host: 'localhost',
        },
    },
    grantTypes: {
        authorization_code: 'Code',
        implicit: 'Implicit',
        refresh_token: 'Refresh Token',
        password: 'Password',
        'iwa:ntlm': 'IWA-NTLM',
        client_credentials: 'Client Credentials',
        'urn:ietf:params:oauth:grant-type:saml2-bearer': 'SAML2',
        'urn:ietf:params:oauth:grant-type:jwt-bearer': 'JWT',
        kerberos: 'Kerberos',
    },
};
