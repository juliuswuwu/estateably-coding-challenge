# API Documentation

## Routes

### `api/transactions/`

- GET
  - Description
    - returns all transactions for specific user
  - Response
    ```
    200
    [
      {
        _id: String,
        createdAt: Date,
        updatedAt: Date,
        description: String,
        category: String,
        value: Numeric
      },
    ...
    ]
    ```

- POST
  - Description
    - creates a new transaction
  - Request body
    ```
    {
      description: String,
      category: String,
      value: Numeric
    }
    ```
  - Response
    ```
    200
    {
      date: Date,
      description: String,
      category: String,
      value: Numeric
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
    [
      {
        _id: String,
        createdAt: Date,
        updatedAt: Date,
        description: String,
        category: String,
        value: Numeric
      },
    ...
    ]

    400
    {
      errors: {
        description: "Description field is required",
        category: "Category field is required",
        value: "Value is invalid"
      },
      isValid: false
    }
    ```
