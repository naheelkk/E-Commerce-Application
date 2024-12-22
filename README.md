# E-commerce Application

A full-featured e-commerce platform built with Node.js, Express, Handlebars, and MongoDB. This application provides a robust shopping experience with user authentication, product management, shopping cart functionality, and secure checkout process.

## 🚀 Features

- User authentication and authorization
- Product catalog with categories and search
- Shopping cart management
- Secure payment processing
- Order history and tracking
- Admin dashboard for product and order management
- Responsive design for mobile and desktop

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: Handlebars (hbs)
- **Payment Processing**: RazorPay API
- **Frontend**: Bootstrap, jQuery, Custom CSS

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/naheelkk/E-Commerce-Application.git
cd E-Commerce-Application
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Start the application:
```bash
npm start
```

## 🏗️ Project Structure

```
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/        # Custom middleware
├── models/            # MongoDB models
├── public/            # Static files
├── routes/            # Application routes
├── views/             # Handlebars templates
└── app.js             # Application entry point
```

## 💻 Usage

### As a Customer

1. Browse the product catalog
2. Create an account or log in
3. Add items to cart
4. Process checkout with test payment
5. View order history

### As an Admin

1. Access admin dashboard at `/admin`
2. Manage products (add, edit, delete)
3. View and process orders
4. Manage user accounts

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🔒 Security Features

- Password hashing with bcrypt
- Session management
- CSRF protection
- Secure payment processing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👥 Contact

Your Name - kknaheel@gmail.com
Project Link: https://github.com/naheelkk/E-Commerce-Application.git

## 🙏 Acknowledgments

- Express.js Documentation
- MongoDB Documentation
- Handlebars Documentation
- Bootstrap Team
- All contributors who helped with the project
