import ContentRepository from "../../databases/typeorm/repositories/content";

export const getContent = (id: string) => {
    return ContentRepository.findById(id);
};
