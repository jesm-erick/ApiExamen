import bcrypt from "bcryptjs"

const saltRounds = 10;


export async function crearUsuario (req, res) {
    try {
        const {name, correo, password, confirmaPassword} = req.body;

        if (password == confirmaPassword){
            const hashed = await bcrypt.hash (password, saltRounds);

            console.log(hashed);

            res.json({isOk: true, msj: "creado"})

        }else{

            res.json({isOk: false, msj: "incorrecto"})
        }
        
    
    } catch (error) {
        
    }
}