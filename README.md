# Notifications Service

This is a sample notification service project created for study purposes. The service manages and delivers notifications to users. It is developed using NestJS, Prisma, Jest, and TypeScript, incorporating key concepts of clean code and S.O.L.I.D architecture.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Usage

To start the service, use the following command:

```bash
npm start
```

## API Endpoints

### GET /notifications

Retrieve a list of notifications.

**Response:**

```json
[
    {
        "id": "1",
        "message": "Your notification message",
        "timestamp": "2023-10-01T12:00:00Z"
    }
]
```

### POST /notifications

Create a new notification.

**Request:**

```json
{
    "message": "Your notification message"
}
```

**Response:**

```json
{
    "id": "2",
    "message": "Your notification message",
    "timestamp": "2023-10-01T12:00:00Z"
}
```

### PUT /notifications/:id

Update an existing notification.

**Request:**

```json
{
    "message": "Updated notification message"
}
```

**Response:**

```json
{
    "id": "1",
    "message": "Updated notification message",
    "timestamp": "2023-10-01T12:00:00Z"
}
```

### DELETE /notifications/:id

Delete a notification.

**Response:**

```json
{
    "message": "Notification deleted successfully"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Tests

To run the tests, use the following command:

```bash
npm test
```

We use Jest as our testing framework. Ensure you have Jest installed and configured in your project.