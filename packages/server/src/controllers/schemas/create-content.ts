import * as Joi from "joi";

export const createContentSchema = Joi.object({
    title: Joi.string().required(),

    duration: Joi.number().required(),

    teacherId: Joi.string().required(),
});
