import * as Joi from "joi";

export const registerAnswerSchema = Joi.object({
    text: Joi.string().required(),

    questionId: Joi.number().required(),

    teacherId: Joi.string().required(),
});
