# Projuect setup

First, the packages that I used to set up the project are Express js, Mongoose, TypeScript, Cors, Zod, dotenv and bcrypt.

## Package work

1. Express.js : Express.js is a minimal and flexible Node.js web application framework. This package is used to interact with web applications and APIs.
2. Mongoose : Used with MongoDB databases, to facilitate interaction with MongoDB and to work with MongoDB documents.
Those used for work are:
- Object Data Modeling (ODM)
- Schema Definition
- Zod Validation
- Middleware Support
- Query Building

3. TypeScript : TapeScript is a superset of JavaScript that provides static typing in the language. In short, typeScript is used to determine the type of javascript
It is primarily used for:
- Static Typing
- Code Maintainability
- Object-Oriented Programming (OOP)
- Compatibility with ECMAScript
4. Cors : Cross-Origin Resource Sharing (CORS) Used for this.
5. Zod : Zod is a TypeScript-first schema declaration and validation library. It is commonly used for data validation in TypeScript projects
6. dotenv : I used this package only to protect the environment variables.
7. bcrypt : I am using this package to hash passwords in this project

# User Maintainability
1. Create a new user
 - Enpoint: POST : /api/users
 - Request Body

```javascript
{
    "userId": 1111,
    "username": "tanzilmia1",
    "password": "tanzil565",
    "fullName": {
        "firstName": "Md Tanzil",
        "lastName": "Mia"
    },
    "age": 24,
    "email": "tanzil@gmail.com",
    "isActive": true,
    "hobbies": ["football"],
    "address": {
        "street": "Tangail",
        "city": "Dhaka",
        "country": "Bangladesh"
    }
}
```
## Success Response Data
```javascript
{
    "success": true,
    "massage": "User fetched successfully!",
    "data": {
        "_id": "65753cff3e382751f52e4c01",
        "userId": 1111,
        "username": "tanzilmia1",
        "fullName": {
            "firstName": "Md Tanzil",
            "lastName": "Mia",
            "_id": "65753cff3e382751f52e4c02"
        },
        "age": 24,
        "email": "tanzil@gmail.com",
        "isActive": true,
        "hobbies": [
            "football"
        ],
        "address": {
            "street": "Tangail",
            "city": "Dhaka",
            "country": "Bangladesh",
            "_id": "65753cff3e382751f52e4c03"
        }
    }
}
```
# Get all data
Endpoint : /api/users
- Response: List of user objects. show the filtering object username, fullName, age, email, address
```javascript
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "_id": "6574a3537cc8f1206b3c2dc9",
            "userId": 1234,
            "username": "tanzilmia",
            "fullName": {
                "firstName": "test check",
                "lastName": "tablu",
                "_id": "6574a3537cc8f1206b3c2dca"
            },
            "age": 20,
            "email": "abcd@gmail.com",
            "isActive": true,
            "hobbies": [
                "anda",
                "lucu"
            ],
            "address": {
                "street": "abcd road",
                "city": "dhaka",
                "country": "bangladesh",
                "_id": "6574a3537cc8f1206b3c2dcb"
            }
        },
        {
            "_id": "6574a3747cc8f1206b3c2dcd",
            "userId": 12345,
            "username": "tanzilUpdate",
            "fullName": {
                "firstName": "ablusdf",
                "lastName": "tablu",
                "_id": "6574a3c87cc8f1206b3c2dda"
            },
            "age": 20,
            "email": "tanzillh@gmail.com",
            "isActive": true,
            "hobbies": [
                "anda",
                "lucu"
            ],
            "address": {
                "street": "abcd road",
                "city": "dhaka",
                "country": "bangladesh",
                "_id": "6574a3c87cc8f1206b3c2dd9"
            }
        },
        {
            "_id": "6574b22dd5a97f6b76b527f2",
            "userId": 123456,
            "username": "tanzilmia25",
            "fullName": {
                "firstName": "tanzil",
                "lastName": "mia",
                "_id": "6574b22dd5a97f6b76b527f3"
            },
            "age": 10,
            "email": "tanzil@gmail.com",
            "isActive": true,
            "hobbies": [
                "sliping"
            ],
            "address": {
                "street": "tangail",
                "city": "dhaka",
                "country": "bangladesh",
                "_id": "6574b22dd5a97f6b76b527f4"
            }
        },
        {
            "_id": "65753cff3e382751f52e4c01",
            "userId": 1111,
            "username": "tanzilmia1",
            "fullName": {
                "firstName": "Md Tanzil",
                "lastName": "Mia",
                "_id": "65753cff3e382751f52e4c02"
            },
            "age": 24,
            "email": "tanzil@gmail.com",
            "isActive": true,
            "hobbies": [
                "football"
            ],
            "address": {
                "street": "Tangail",
                "city": "Dhaka",
                "country": "Bangladesh",
                "_id": "65753cff3e382751f52e4c03"
            }
        }
    ]
}
```
# Specific user by ID
- Endpoint: Get : /api/users/:userId
### The response will show like this if the response is correct and the password is omitted during filtering so the password will not show
```javascript
{
    "success": true,
    "massage": "User fetched successfully!",
    "data": {
        "_id": "6574a3537cc8f1206b3c2dc9",
        "userId": 1234,
        "username": "tanzilmia",
        "fullName": {
            "firstName": "test check",
            "lastName": "tablu",
            "_id": "6574a3537cc8f1206b3c2dca"
        },
        "age": 20,
        "email": "abcd@gmail.com",
        "isActive": true,
        "hobbies": [
            "anda",
            "lucu"
        ],
        "address": {
            "street": "abcd road",
            "city": "dhaka",
            "country": "bangladesh",
            "_id": "6574a3537cc8f1206b3c2dcb"
        }
    }
}
```
### 
If an error occurs, a meaningful error will be displayed
```javascript
{
    "success": false,
    "massage": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
}
```

# Update user
- Endpoint: PUT : /api/users/:userId
- Request Body
### Response: If the User object is updated and the Confirmed Password field is not included in the response data. If the update is done correctly.
```javascript
{
    "userId": 1234,
    "username": "tanzilupdateuser",
    "password": "25415711",
    "fullName": {
        "firstName": "tanzil update",
        "lastName": "check"
    },
    "age": 25,
    "email": "tanzil2580@gmail.com",
    "isActive": true,
    "hobbies": ["football"],
    "address": {
        "street": "dhaka",
        "city": "dhaka",
        "country": "bangladesh"
    }
}
```
### it will show like this and if not, it will give a meaningful massage
```javascript
{
    "success": false,
    "massage": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
}
```

# Delete a user
- Endpoint: DELETE /api/users/:userId
- Response: Success message
```javascript
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```
### If the user exists or not then this message will be given
```javascript
{
    "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
}
```

# Bonus Section
## Order Management:
1. Add new product in order
### If the 'order' attribute already exists for a user, a new product is added to it. Otherwise, an 'order' array is created within the user object
- Endpoint: PUT /api/users/:userId/orders
- Request Body
```javascript
  {
        "productName":"i Phone 15",
        "price":30000,
        "quantity":1
     }
```
- Response : Successfully massage
```javascript
{
    "success": true,
    "massage": "Order created successfully!",
    "data": null
}
```
