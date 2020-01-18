const Dev = require('../Models/Dev');
const parse_array_as_string = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res){
        const { latitude, longitude, techs } = req.query;

        const techs_arr = parse_array_as_string(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techs_arr
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json(devs);
    }
}