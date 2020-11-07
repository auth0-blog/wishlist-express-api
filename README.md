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
https://wishlist.example.com
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

Click on the `.env` file from your Glitch project. You'll need to add the values for `AUTH0_AUDIENCE` and `AUTH0_DOMAIN` from your Auth0 API configuration.

Head back to your Auth0 API page, and **follow these steps to get the Auth0 Audience**:

![Get the Auth0 Audience to configure an API](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/get-the-auth0-audience.png)

1. Click on the **"Settings"** tab.

2. Locate the **"Identifier"** field and copy its value.

3. Paste the "Identifier" value as the value of `AUTH0_AUDIENCE` in `.env`.

Now, **follow these steps to get the Auth0 Domain value**:

![Get the Auth0 Domain to configure an API](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/get-the-auth0-domain.png)

1. Click on the **"Test"** tab.
2. Locate the section called **"Asking Auth0 for tokens from my application"**.
3. Click on the **cURL** tab to show a mock `POST` request.
4. Copy your Auth0 domain, which is _part_ of the `--url` parameter value: `tenant-name.region.auth0.com`.
5. Paste the Auth0 domain value as the value of `AUTH0_DOMAIN` in `.env`.

**Tips to get the Auth0 Domain**

- The Auth0 Domain is the substring between the protocol, `https://` and the path `/oauth/token`.

- The Auth0 Domain follows this pattern: `tenant-name.region.auth0.com`.
 
- The `region` subdomain (`au`, `us`, or `eu`) is optional. Some Auth0 Domains don't have it.

- **Click on the image above, please, if you have any doubt on how to get the Auth0 Domain value**.

With the `.env` configuration values set, run the API server by issuing the following command:

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

## API Endpoints

### Public Endpoints

🔓 `GET /api/wishlist/items`

Get all items from the wishlist.

🔓 `GET /api/wishlist/item`

Get an item from the wishlist.
The request body must include the ID of the item you want to retrieve as follows:

```json
{
    "id": "c0PGnhCeb"
}
```

### Protected Endpoints

These endpoints require the request to include an access token issued by Auth0 in the authorization header.

🔐 `POST /api/wishlist/item`

Add an item to the wishlist.
The request body must include the item description as follows:

```json
{
  "item": "nitendo switch"
}
```

🔐 `PUT /api/wishlist/item`

Update an item from the wishlist.
The request body must include the ID of item ID you want to update and the new description of the item as follows:

```json
{
    "id": "Ww_1KHteq",
    "description": "nintendo console"
}
```

🔐 `DELETE /api/wishlist/items`

Remove all items from the wishlist.

🔐 `DELETE /api/wishlist/item`

Remove an item from the wishlist.
The request body must include the ID of the item you want to remove as follows:

```json
{
    "id": "_SdDBfnbgw"
}
```
