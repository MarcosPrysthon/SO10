const axios = require('axios');
const Dev = require('../Models/Dev');
const parse_string_as_array = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');


module.exports = {
    async store(req, res){
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });
        if(!dev){
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = response.data;
            let techs_arr = parse_string_as_array(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techs_arr,
                location
            });

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techs_arr
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        
            return res.json(dev);
        }

        return res.json(dev); 
    },

    async index(req, res){
        const devs = await Dev.find();

        return res.json(devs);
    },

    async destroy(req, res){
        const { _id } = req.params;

        let dev = await Dev.findOne({ _id });
        if(!dev) return res.json({ message: 'Usuario não existe' });

        const response = await Dev.deleteOne({ _id });
        return res.json(response);
    }
}