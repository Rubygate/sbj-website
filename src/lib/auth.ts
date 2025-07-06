import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface UserPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

export class AuthService {
  // Hash password
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  }

  // Verify password
  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  // Generate JWT token
  static generateToken(payload: UserPayload): string {
    const secret = process.env.JWT_SECRET || 'your-secret-key';
    return jwt.sign(payload, secret, { expiresIn: '24h' });
  }

  // Verify JWT token
  static verifyToken(token: string): UserPayload | null {
    try {
      const secret = process.env.JWT_SECRET || 'your-secret-key';
      const decoded = jwt.verify(token, secret) as UserPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  }

  // Authenticate user
  static async authenticateUser(email: string, password: string): Promise<UserPayload | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          password: true,
          name: true,
          role: true,
          isActive: true,
        },
      });

      if (!user || !user.isActive) {
        return null;
      }

      const isValidPassword = await this.verifyPassword(password, user.password);
      if (!isValidPassword) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }

  // Create admin user
  static async createAdminUser(email: string, password: string, name: string) {
    try {
      const hashedPassword = await this.hashPassword(password);
      
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role: 'ADMIN',
        },
      });

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
    } catch (error) {
      console.error('Create user error:', error);
      throw error;
    }
  }

  // Get user by ID
  static async getUserById(id: string): Promise<UserPayload | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          isActive: true,
        },
      });

      if (!user || !user.isActive) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }
} 