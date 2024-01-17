# First Flight Assessment

## Features

### Section 1 - Hero
- Handle upload image for desktop and mobile
- Manage the positioning of the content in mobile and desktop
- Allows to add block for the following:
    - Heading
    - Text
    - Button

### Section 2 - Feature Product
- Select feature product
- Option to show the product vendor
- Allow customer to add product to cart
- Handle one or multiple awards for a specific product via metaobject
- Displaying awards via Storefront API and Liquid

### Section 3 - Resort Forecast
- Uses [Ski Resort API](https://rapidapi.com/joeykyber/api/ski-resort-forecast)
- Find ski resort by search
    - Requires a minimum of 3 characters before fetching new data
    - Loading indicator
- Preload the previous resort on page reload

### Limitations
- The API only returns basic data and does not provide other information specified in the initial requirements

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v18.x or later)
- npm (v10.x or later) or pnpm (v8.14.x or later)
- Shopify CLI 3

## Installation

To install the project, follow these steps:

1. Clone the repository
    <pre>git clone [repo here]</pre>

2. Navigation to the project directory:
    <pre>cd first-flight-assessment</pre>

3. Install dependencies:
    <pre>pnpm install/npm install</pre>

## Usage

To run the project, follow these steps:

1. Authenticate in Shopify and generate the preview link:
    <pre>pnpm run theme:start</pre>

2. Run Development server:
    <pre>pnpm run watch</pre>

3. Build project for Production:
    <pre>pnpm run build</pre>

