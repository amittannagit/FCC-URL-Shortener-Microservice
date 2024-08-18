# URL Shortener Microservice

This is a URL Shortener Microservice built with Node.js and Express. It provides a way to shorten long URLs and redirect them to their original destinations. This project is a part of the freeCodeCamp backend development curriculum.

## Features

- Shorten URLs by posting them to the `/api/shorturl` endpoint.
- Redirect shortened URLs to their original destinations.
- Handle invalid URLs with appropriate error messages.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/amittannagit/FCC-URL-Shortener-Microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

    The server will start and listen on port 3000 or the port specified in the environment variable `PORT`.

### Usage

1. **Shorten a URL**:

    - **Endpoint**: `POST /api/shorturl`
    - **Request Body**: JSON object with a `url` field.
    - **Example Request**:
      ```json
      {
        "url": "https://www.example.com"
      }
      ```
    - **Response**: JSON object containing `original_url` and `short_url`.
    - **Example Response**:
      ```json
      {
        "original_url": "https://www.example.com",
        "short_url": 1
      }
      ```

2. **Redirect to Original URL**:

    - **Endpoint**: `GET /api/shorturl/:shortUrl`
    - **Path Parameter**: `shortUrl` (numeric short URL identifier)
    - **Example**: `GET /api/shorturl/1`
    - **Redirects** to the original URL stored for that short URL.

### Error Handling

- **No URL Provided**:
  - **Response**: `{ "error": "No URL provided" }`
- **Invalid URL Format**:
  - **Response**: `{ "error": "invalid url" }`
- **No Corresponding URL Found**:
  - **Response**: `{ "error": "No corresponding URL found" }`

### Running Tests

To run tests, you need to use a testing framework. For manual testing, you can use tools like Postman or `curl` to interact with the endpoints.

### Deployment

For deploying the application, you can use services like Heroku, Vercel, or any cloud provider that supports Node.js applications. Make sure to set the `PORT` environment variable if deploying.

### Contributing

Feel free to open issues or submit pull requests to contribute to the project. Follow the standard GitHub workflow for contributing.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
