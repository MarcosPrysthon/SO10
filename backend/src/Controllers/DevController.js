const axios = require('axios');
const Dev = require('../Models/Dev');
const parse_string_as_array = require('../utils/parseStringAsArray');

module.exports = {
    async store(req, res){
        const { github, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github });
        if(dev) return res.json(dev);

        const response = await axios.get(`https://api.github.com/users/${github}`);
        const { name = login, avatar_url, bio } = response.data;
        let techs_arr = parse_string_as_array(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
            github,
            name,
            avatar_url,
            bio,
            techs: techs_arr,
            location
        });
    
        return res.json(dev);
    },

    async index(req, res){
        const devs = await Dev.find();

        return res.json(devs);
    },

    async update(){
        
    },

    async destroy(){
        
    }
}