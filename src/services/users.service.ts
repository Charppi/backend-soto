import { user } from "../db";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";

export class UsersService {
  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.name || !createUserDto.role) {
      throw new Error("El nombre y el rol son requeridos.");
    }
    const createdUser = await user.create({ data: createUserDto });
    return { message: "Usuario creado exitosamente.", user: createdUser };
  }
  async update(updateUserDto: UpdateUserDto) {
    if (!updateUserDto.name || !updateUserDto.role) {
      throw new Error("El nombre y el rol son requeridos.");
    }
    const createdUser = await user.update({
      data: updateUserDto,
      where: { id: updateUserDto.id },
    });
    return { message: "Usuario editado exitosamente.", user: createdUser };
  }
  async delete(id: number) {
    if (!id) throw new Error("El id es requerido.");
    const userToDelete = await user.findFirst({ where: { id } });
    if (!userToDelete) throw new Error("Usuario no encontrado");
    await user.delete({ where: { id } });
    return { message: "Usuario eliminado exitosamente." };
  }
  getAll() {
    return user.findMany();
  }
}
