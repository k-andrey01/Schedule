export const isProduction = process.env.NODE_ENV === 'production';

export const dateLocaleOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

export const cities = {
	1: "Казань",
	2: "Москва",
	3: "Киров",
	4: "Санкт-Петербург",
	5: "Уфа",
	7: "Барнаул"
};

export const types = {
	1: "Концерт",
	2: "Кино",
	3: "Театральное представление"
}

export const languages = {
	1: "Русский",
	2: "Английский",
	3: "Испанский",
	4: "Французский"
}

export const places = {
	5: "Алмаз Синема Сувар, Казань, Мавлютова",
	6: "Пять Звезд, Москва, Бахрушина",
	7: "Театр на Спасской, Киров, Спасская"
}

export const performances = {
	1: "Гудбай, Берлин!",
	2: "Вечные",
	3: "Французский вестник"
}

export const apiUrl = "http://localhost:8080/"
