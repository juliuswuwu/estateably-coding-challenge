# API Documentation

## Base URL

`https://estateably-code-challenge.herokuapp.com/`

***
## List Transactions

### Description

    returns all transactions that match the optional query parameters

### HTTP Request

`GET api/transactions/`

### Query Parameters

| Parameter   | Type    | Default | Description                                                                             |
| ----------- | ------- | ------- | --------------------------------------------------------------------------------------- |
| category    | String  | None    | optional and is one of the available categories (Salary, Food, Transport, House, Other) |
| description | String  | None    | optional and finds matching transaction descriptions                                    |
| value       | Numeric | None    | optional and finds exact matches for transaction values                                 |

### Response

```json
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

***

## Create Transaction

### Description

    creates a new transaction

### HTTP Request

`POST api/transactions/`

### Request Body

```json
  {
    description: String,
    category: String,
    value: Numeric
  }
```

### Response

```json
  200
  {
    _id: String,
    createdAt: Date,
    updatedAt: Date,
    description: String,
    category: String,
    value: Numeric
  }

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
