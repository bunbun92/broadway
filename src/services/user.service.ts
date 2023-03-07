import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { _ } from 'lodash';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(userId: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { userId, deletedAt: null },
      select: ['id', 'password'],
    });

    if (_.isNil(user)) {
      throw new NotFoundException(`User not found. userId: ${userId}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException(
        `User password is not correct. userId: ${userId}`
      );
    }

    const payload = { id: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async createUser(
    userId: string,
    password: string,
    name: string,
    email: string,
    userType: number
  ) {
    const existUser = await this.getUserInfo(userId);
    if (!_.isNil(existUser)) {
      throw new ConflictException(`User already exists. userId: ${userId}`);
    }

    const insertResult = await this.userRepository.insert({
      userId,
      password,
      name,
      email,
      userType,
    });

    const payload = { id: insertResult.identifiers[0].id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async updateUser(
    userId: string,
    password: string,
    name: string,
    email: string,
    userType: number
  ) {
    await this.userRepository.update(
      { userId },
      { name, password, email, userType }
    );
  }

  async deleteUser(id: number) {
    await this.userRepository.softDelete(id);
  }

  async getUserInfo(userId: string) {
    return await this.userRepository.findOne({
      where: { userId, deletedAt: null },
      select: ['name'],
    });
  }
}
