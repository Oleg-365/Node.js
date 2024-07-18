const Joi = require('joi'); // валидатор

const schema = Joi.object({
	id: Joi.number().required(), // required() - говорит о том что это поле обязательное
	title: Joi.string().min(1).required(),
	contnet: Joi.string().min(10).required()
});

const result = schema.validate({
	id: 1,
	title: '1',
	contnet: '1',
});

console.log(result.error.details); 