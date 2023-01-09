import { Content } from "../../databases/typeorm/entities/content";
import ContentRepository from "../../databases/typeorm/repositories/content";

export const getContent = async (id: string): Promise<Content> => {
    return (await ContentRepository.findById(id))[0];
};
