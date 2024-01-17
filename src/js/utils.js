const storeFrontAccessToken = '3c2b99932a9966119d258df1a068914d'

export const storeFrontApiURL = 'https://first-flight-online.myshopify.com/api/2024-01/graphql.json'

export const storefrontHeaderConfig = {
  headers: {
    'X-Shopify-Storefront-Access-Token': storeFrontAccessToken,
    'Content-Type': 'application/graphql'
  }
}

const skiAPIKey = '98717b7a22msh116562f3e6ad1ddp1e569cjsnb734564342d6'
const skiAPIHost = 'ski-resort-forecast.p.rapidapi.com'

export const skiResortHeaderConfig = {
  headers: {
    'X-RapidAPI-Key': skiAPIKey,
    'X-RapidAPI-Host': skiAPIHost
  }
}

export const skiResortApiURL = `https://${skiAPIHost}`