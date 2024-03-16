# Valentine's Book List API

This API allows you to reserve a book.

The API is available at `https://simple-books-api.glitch.me`

Link to official documentation is [here](https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md)

## End-point: API Status

This endpoint allows you to retrieve the status of the API.

### Response

- Status: 200
- Content-Type: application/json

The response will contain the status of the API in JSON format.

Example response:

```json
{
  "status": "UP"
}
```

### Method: GET

> ```
> {{baseUrl}}/status
> ```

## End-point: Get book list

This endpoint allows you to retrieve a list of books. You can make an HTTP GET request to `{{baseUrl}}/books/lists` with the following query parameters:

- `api-key`: Your API key for authentication
- `list`: Specify the type of list, either "fiction" or "non-fiction"
- `page`: The page number for paginated results

Optional query parameters:

- `type`: Filter the results by book type, either "fiction" or "non-fiction"
- `limit`: Limit the number of results, with a value between 1 and 20.

The response will be in JSON format with the following structure:

```json
{
  "status": "",
  "num_results": 0,
  "page": "",
  "total_pages": 0,
  "results": [
    {
      "title": "",
      "category": [""],
      "type": "",
      "author": "",
      "release_year": 0,
      "rating": 0
    }
  ]
}
```

The `status` field indicates the status of the response, `num_results` represents the number of results, `page` denotes the current page, `total_pages` is the total number of pages, and `results` contain an array of book objects with their `title`, `category`, `type`, `author`, `release_year`, and `rating`.

Please note that the actual values for the fields will be populated in the response.

### Method: GET

> ```
> {{baseUrl}}/books/lists?api-key=8fhg93xkjd38fhg834jdfgjd&list=non-fiction&page=3
> ```

### Query Params

| Param   | value                    |
| ------- | ------------------------ |
| api-key | 8fhg93xkjd38fhg834jdfgjd |
| list    | non-fiction              |
| page    | 3                        |
