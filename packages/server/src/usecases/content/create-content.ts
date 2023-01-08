import { Content } from "../../databases/typeorm/entities/content";
import ContentRepository from "../../databases/typeorm/repositories/content";
import UserRepository from "../../databases/typeorm/repositories/user";
import { mountErrorObject } from "../../utils";

export const createContent = async (
    contentDTO: Partial<Content>,
    teacherId: string,
): Promise<any> => {
    const teacher = await UserRepository.findById(teacherId);

    if (!teacher) {
        return mountErrorObject("teacher doesn't exist");
    }

    const students = await UserRepository.findAllStudents();

    try {
        return ContentRepository.save({
            teacher,
            students,
            ...contentDTO,
        });
    } catch (error) {
        console.error(error);
        return mountErrorObject("Couldn't save content");
    }
};
