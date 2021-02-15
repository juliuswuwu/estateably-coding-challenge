# API Documentation

## Routes

### `api/transactions/`

- GET
  - Description
    - returns all transactions for specific user
  - Response
    ```
    200
    {
      date,
      description,
      category,
      value
    }
    ```

- POST
  - Description
    - creates one or more transactions
  - Request body
    ```
    {
      date,
      description,
      category,
      value
    }
    ```
  - Response
    ```
    200
    {
      date,
      description,
      category,
      value
    }
    ```

### `api/transactions?category={}&description={}&value={}`

- GET
  - Description
    - returns all transactions matching the filter and search terms for specific user
    - category is optional and is one of the available categories (Salary, Food, Transport, House, Other)
    - description is optional and finds matching transaction descriptions
    - value is optional and finds exact matches for transaction values
  - Response
    ```
    200
    {
      date,
      description,
      category,
      value
    }
    ```
