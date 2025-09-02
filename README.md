# Node Mongo Items

A simple Node.js application for managing items stored in a MongoDB database. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using Express.js and Mongoose, making it a great starting point for learning how to build RESTful APIs with Node.js and MongoDB.

## Features

- **RESTful API** for item management
- **CRUD operations**: Create, read, update, delete items
- **MongoDB integration** using Mongoose
- **Express.js** for HTTP routing and middleware
- **Environment-based configuration**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devark28/node-mongo-items.git
   cd node-mongo-items
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/itemsdb
   PORT=3000
   ```

### Running the Application

Start the server with:

```bash
npm start
```

The API will be accessible at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| GET    | `/items`              | Get all items            |
| GET    | `/items/:id`          | Get a single item by ID  |
| POST   | `/items`              | Add a new item           |
| PUT    | `/items/:id`          | Update an item by ID     |
| DELETE | `/items/:id`          | Delete an item by ID     |

## Example Item Model

```json
{
  "_id": "609e12ab1234567890abcd12",
  "name": "Sample Item",
  "description": "A sample item for demonstration.",
  "price": 19.99
}
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Created by [devark28](https://github.com/devark28)
