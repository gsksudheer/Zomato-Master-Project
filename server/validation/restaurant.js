import joi from "joi";

export const ValidateRestaurentCity = (restaurantObj) => {
    const Schema = joi.object({
        city:joi.string().required(),
    });
    return Schema.validateAsync(restaurantObj);
};

export const ValidateRestaurentSearchString = (restaurantObj) => {
    const Schema = joi.object({
        searchString:joi.string().required(),
    });
    return Schema.validateAsync(restaurantObj);
};

/* 
 name: joi.string().required(),
        address: joi.string().required(),
        mapLocation: joi.string().required(),
        cuisin: joi.array().items(joi.string()),
        restaurentTimings: joi.string(),
        contactNumber: joi.number(),
        website: joi.string(),
        popularDishes: joi.array().items(joi.string()),
        averageCost: joi.number(),
        amenties: joi.array().items(joi.string()),
        menu: joi.string(),
        review: joi.string(),
        photos: joi.string(),
*/