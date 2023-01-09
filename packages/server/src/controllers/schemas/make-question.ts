import * as Joi from "joi";

export const makeQuestionSchema = Joi.object({
    text: Joi.string().required(),

    contentId: Joi.string().required(),

    studentId: Joi.string().required(),
});
