import { fetch } from 'wix-fetch';
import wixSecretsBackend from 'wix-secrets-backend';

export async function getDataFromMongoDB() {
    try {
        // Get MongoDB connection details from Wix Secrets
        const apiKey = await wixSecretsBackend.getSecret('MONGODB_API_KEY');
        const dataApiUrl = await wixSecretsBackend.getSecret('MONGODB_DATA_API_URL');

        const response = await fetch(dataApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': apiKey
            },
            body: JSON.stringify({
                dataSource: 'Daily Dynasties',
                database: 'dailydynasties',
                collection: 'allProjections',
                filter: {} // Add any filters you need
            })
        });

        const data = await response.json();
        return data.documents;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}