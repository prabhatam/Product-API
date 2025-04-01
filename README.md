
# Simple CRUD API with Express & MongoDB

A RESTful API for product management built with Express.js, Mongoose, and Node.js.

## Features
- Create, Read, Update, Delete products
- MongoDB database integration
- Environment variable configuration
- Modular code structure

## 🛠️ Tech Stack
**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Environment Management:** Dotenv

**Development Tools:**
- **Hot Reload:** Nodemon
- **API Testing:** Postman
- **Package Manager:** npm

## API Endpoints
| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/products`       | Get all products    |
| GET    | `/api/products/:id`   | Get single product  |
| POST   | `/api/products`       | Create new product  |
| PUT    | `/api/products/:id`   | Update product      |
| DELETE | `/api/products/:id`   | Delete product      |

## Dependencies
- Express
- Mongoose
- Dotenv
- Nodemon (dev)

## License
MIT
