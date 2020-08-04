const mongoose = require('mongoose');
const Place = mongoose.model('Places');

const getAllPlaces = async () => {
    try{
        const places = await Place.find();
        let buttons = [];
        for(let i=0; i<places.length; i++){
            buttons.push([{
                text: places[i].name,
                callback_data: places[i]._id
            }])
        }
        return {
            reply_markup: JSON.stringify({
                inline_keyboard: buttons
            })
        };
    }
    catch (e) {
        return false;
    }
}

const findPlaceById = async (id) => {
    try{
        const place = await Place.findById(id);
        return place;
    }
    catch (e) {
        return false;
    }
}

module.exports = {getAllPlaces, findPlaceById};
