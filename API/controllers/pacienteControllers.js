const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // console.log(req.body);
    
    // Crear Objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({ mensaje : 'El cliente se agregó correctamente'}); 
        console.log(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}