import joi from "joi";

export const ValidateRestaurentId = (resId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });
    return Schema.validateAsync(resId);
};

export const ValidateRestCategory = (category) => {
    const Schema = joi.object({
        category: joi.string().required(),
    });
    return Schema.validateAsync(category);
};