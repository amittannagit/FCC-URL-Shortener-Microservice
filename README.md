# URL Shortener Microservice

This is a URL Shortener Microservice project built as part of the [freeCodeCamp Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

## Project Overview

The URL Shortener Microservice provides an API to shorten URLs and redirect shortened URLs to their original form. It handles URL validation and error messages for invalid URLs.

### Features

- **Shorten URLs**: Accepts a URL and returns a shortened URL identifier.
- **Redirect**: Redirects requests to the original URL based on the shortened URL identifier.
- **Error Handling**: Handles invalid URLs and unknown short URLs with appropriate error messages.

## API Endpoints

### POST `/api/shorturl`

- **Request Body**:
  ```json
  {
    "url": "http://example.com"
  }
  ```

- **Example Request**:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"url":"http://example.com"}' http://localhost:3000/api/shorturl
  ```

- **Example Response**:
  ```json
  {
    "original_url": "http://example.com",
    "short_url": 1
  }
  ```

- **Error Handling**:
  - **Invalid URL**:
    - **Request**:
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"url":"invalid-url"}' http://localhost:3000/api/shorturl
      ```
    - **Response**:
      ```json
      {
        "error": "invalid url"
      }
      ```

### GET `/api/shorturl/:short_url`

- **Parameters**:
  - `short_url`: The shortened URL identifier.

- **Example Request**:
  ```bash
  curl http://localhost:3000/api/shorturl/1
  ```

- **Example Response**:
  - **Redirects** to the original URL if found.

- **Error Handling**:
  - **Short URL Not Found**:
    - **Response**:
      ```json
      {
        "error": "No corresponding URL found"
      }
      ```

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
    cd FCC-URL-Shortener-Microservice
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

## Testing

To test the endpoints, you can use tools like [Postman](https://www.postman.com/) or `curl`.

### Test Cases

1. **Shorten URL**:
    - **Request**:
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"url":"http://example.com"}' http://localhost:3000/api/shorturl
      ```
    - **Expected Response**:
      ```json
      {
        "original_url": "http://example.com",
        "short_url": 1
      }
      ```

2. **Redirect to Original URL**:
    - **Request**:
      ```bash
      curl http://localhost:3000/api/shorturl/1
      ```
    - **Expected Behavior**:
      Redirects to `http://example.com`.

3. **Invalid URL**:
    - **Request**:
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"url":"invalid-url"}' http://localhost:3000/api/shorturl
      ```
    - **Expected Response**:
      ```json
      {
        "error": "invalid url"
      }
      ```

4. **Short URL Not Found**:
    - **Request**:
      ```bash
      curl http://localhost:3000/api/shorturl/999
      ```
    - **Expected Response**:
      ```json
      {
        "error": "No corresponding URL found"
      }
      ```

## Deployment

For deploying the application, you can use services like [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/), or any cloud provider that supports Node.js applications. Ensure to set the `PORT` environment variable if deploying.

## Contributing

Feel free to open issues or submit pull requests to contribute to the project. Follow the standard GitHub workflow for contributing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
