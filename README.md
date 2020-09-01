# WishList API: Express Sample

## Quick Setup

### 1. Configure Auth0

You need an Auth0 account. If you don't have one yet, <a href="https://auth0.com/signup">sign up for a free Auth0 account</a>.

Open the [APIs section of the Auth0 Dashboard](https://manage.auth0.com/#/apis), click the "Create API" button.

Fill out the form that comes up:

- **Name:**

```
WishList API Sample
```

- **Identifier:**

```
https://wishlist.sample
```

Leave the signing algorithm as `RS256`. It's the best option from a security standpoint.

Once you've added those values, click the "Create" button.

Once you create an Auth0 API, a new page loads up, presenting you with your Auth0 API information.

Keep page open to complete the next step.

### 2. Create a Quick Live Server

Open this Glitch project:

[https://glitch.com/edit/#!/auth0-blog-wishlist-express-api-1](https://glitch.com/edit/#!/auth0-blog-wishlist-express-api-1)

Click on the "Remix to Edit" button in the top-right corner.

### 3. Connect the Server with Auth0

Click on the `.env` file from your Glitch project. You'll need to add the values for `AUTH0_AUDIENCE` and `AUTH0_ISSUER` from your Auth0 API configuration.

Head back to your Auth0 API page.

Click on the "Quick Start" tab. This page offers guidance on how to set up different backend technologies to consume the Authorization API you've created.

From the code box, choose "Node.js".

Use the value from the `jwtCheck` method to populate the missing environmental variable values from your `.env` file. 

The `AUTH0_ISSUER` is the value of the `issuer` property, including the trailing slash.

The `AUTH0_AUDIENCE` is the value of the `audience` property.

> _Do not_ include the quotes as part of the `.env` variable value. Only include the string within the quotes.

### 4. Test the Live Server

In your Glitch project, click on the "Share" button, which you can find under the project name in the top-left corner.

Click on the "Live App" tab and copy the first URL right under the buttons. This is the root URL of your live server that you can use to make requests:

```bash
https://<random-long-string>.glitch.me
```

Open the terminal and test if the server is working by making the following request:

```bash
curl https://<random-long-string>.glitch.me/api/wishlist/items
```

You should receive a response from the server similar to this:

```bash
{
    "items": [
        {
            "id": "IHbQsGGh-",
            "description": "toilet paper"
        },
        {
            "id": "UBihgXerxm",
            "description": "face mask"
        },
        {
            "id": "8TL-dp-Q1F",
            "description": "hand sanitizer"
        }
    ]
}
```
