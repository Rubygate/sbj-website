# 🎯 Sparkles by Junetrain - Admin Backend Setup

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/sbj_admin"

# JWT Secret (generate a secure random string)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Next.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Environment
NODE_ENV="development"
```

### 2. Database Setup

1. **Install PostgreSQL** (if not already installed)
2. **Create a new database**:
   ```sql
   CREATE DATABASE sbj_admin;
   ```
3. **Run Prisma migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```

### 3. Create Admin User

Run the setup script to create the initial admin user:

```bash
node scripts/setup-admin.js
```

**Default Admin Credentials:**
- Email: `admin@sparklesbyjunetrain.com`
- Password: `admin123`

⚠️ **Important:** Change the password after first login!

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Access Admin Panel

Visit: `http://localhost:3000/admin/login`

## 🔧 Features Implemented

### ✅ Authentication System
- Secure login/logout with JWT tokens
- Password hashing with bcrypt
- Protected admin routes
- Session management

### ✅ Admin Dashboard
- Overview statistics
- Recent orders and products
- Quick action buttons
- Responsive design

### ✅ Database Schema
- Users (Admin authentication)
- Products (Inventory management)
- Orders (Order tracking)
- Customers (Customer database)
- Blog Posts (Content management)
- Analytics (Data tracking)

## 🛠️ Next Steps

### Product Management
- [ ] Add/Edit/Delete products
- [ ] Product categories and tags
- [ ] Image upload functionality
- [ ] Inventory tracking

### Order Management
- [ ] Order status updates
- [ ] Order details view
- [ ] Shipping tracking
- [ ] Invoice generation

### Customer Management
- [ ] Customer profiles
- [ ] Order history
- [ ] Customer analytics
- [ ] Communication tools

### Content Management
- [ ] Blog post editor
- [ ] Rich text editing
- [ ] Image management
- [ ] SEO optimization

### Analytics
- [ ] Sales reports
- [ ] Customer insights
- [ ] Product performance
- [ ] Revenue tracking

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt with salt rounds
- **Protected Routes**: Middleware protection for admin routes
- **HTTP-Only Cookies**: Secure cookie storage
- **Input Validation**: Server-side validation
- **SQL Injection Protection**: Prisma ORM

## 📱 Responsive Design

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Branding

The admin panel uses the Sparkles by Junetrain brand colors:
- Primary: `#712F91` (Purple)
- Secondary: `#F9CCE3` (Pink)
- Text: `#1A1A1A` (Dark)
- Background: `#6B7280` (Gray)

## 🚀 Deployment

For production deployment:

1. **Set up a PostgreSQL database** (e.g., Supabase, Railway, or AWS RDS)
2. **Update environment variables** with production values
3. **Generate secure JWT secrets**
4. **Deploy to Vercel** or your preferred hosting platform
5. **Run database migrations**
6. **Create admin user**

## 📞 Support

For technical support or questions about the admin backend, please contact the development team. 