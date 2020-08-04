const {getAllPlaces, findPlaceById} = require('../controllers/places-controller');

module.exports = bot => {

    bot.onText(/places/, async (msg) => {
        const userId = msg.from.id;
        const places = await getAllPlaces();
        if(!places){
            bot.sendMessage(userId, "Нажаль, на даний момент бот порожній");
        }
        bot.sendMessage(userId, "Виберіть потірбний ресторан", places);
    });

    bot.on('callback_query', async (msg) => {
        const userId = msg.from.id;
        const place = await findPlaceById(msg.data);
        if(place){
            const textToSend = `${place.name}\n\u{1F4CC} ${place.address}\n\u{1F4F1} ${place.contacts}`;
            bot.sendMessage(userId, textToSend);
        }
    });
}
