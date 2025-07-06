import * as jose from 'jose';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export interface UserPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

export class AuthService {
  // Hash password using Web Crypto API
  static async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Verify password using Web Crypto API
  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    const hashedInput = await this.hashPassword(password);
    return hashedInput === hashedPassword;
  }

  // Generate JWT token
  static async generateToken(payload: UserPayload): Promise<string> {
    const secret = process.env.JWT_SECRET || 'your-secret-key';
    const encodedSecret = new TextEncoder().encode(secret);
    
    const token = await new jose.SignJWT(payload as any)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(encodedSecret);
    
    return token;
  }

  // Verify JWT token
  static async verifyToken(token: string): Promise<UserPayload | null> {
    try {
      const secret = process.env.JWT_SECRET || 'your-secret-key';
      const encodedSecret = new TextEncoder().encode(secret);
      
      console.log('AuthService - Verifying token with secret length:', secret.length);
      console.log('AuthService - Token to verify:', token.substring(0, 20) + '...');
      
      const { payload } = await jose.jwtVerify(token, encodedSecret);
      console.log('AuthService - Token verified successfully for user:', payload.email);
      
      return payload as unknown as UserPayload;
    } catch (error: any) {
      console.error('AuthService - Token verification failed:', error);
      console.error('AuthService - Error name:', error?.name);
      console.error('AuthService - Error message:', error?.message);
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