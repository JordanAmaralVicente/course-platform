import * as Joi from "joi";

export const registerAnswerSchema = Joi.object({
    text: Joi.string().required(),

    questionId: Joi.string().required(),

    teacherId: Joi.string().required(),
});
