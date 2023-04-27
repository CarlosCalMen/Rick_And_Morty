 const axios = require('axios');

const URL="https://rickandmortyapi.com/api/character/";

const getCharById = async (req,res)=>{
    try {
        const {id}=req.params;
        const {data} = await axios(`${URL}/${id}`)
        if (!data.name) throw Error(`Faltan datos del personaje con ID ${id}`);
        const character ={
            id:data.id,
            status:data.status,
            name:data.name,
            species:data.species,
            origin:data.origin,
            image:data.image,
            gender:data.gender
        }    
        res.status(200).json(character)
    } catch (error) {
        return error.message.includes('ID')
        ?res.status(404).json(error.message)
        :res.status(500).json(error.response.data.error)
    }
};
    
module.exports = {getCharById};