import ContentRepository from "../../databases/typeorm/repositories/content";

export const getContents = () => {
    return ContentRepository.findAll();
};
