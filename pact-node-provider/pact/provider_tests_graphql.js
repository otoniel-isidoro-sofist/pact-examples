const { Verifier } = require('@pact-foundation/pact');
const packageJson = require('../package.json');

let opts = {
    providerBaseUrl: 'http://localhost:3000',
    provider: 'graphql-hero-provider',
    pactBrokerUrl: 'https://localhost:9292',
    pactBrokerUsername: process.env.PACT_USERNAME,
    pactBrokerPassword: process.env.PACT_PASSWORD,
    publishVerificationResult: true,
    providerVersion: packageJson.version,
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});