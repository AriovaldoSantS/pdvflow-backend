import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = [
    { id: 1, username: 'admin', password: '1234' },
    { id: 2, username: 'user', password: '4321' },
  ];

  validateUser(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }
}
