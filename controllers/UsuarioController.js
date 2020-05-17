const { Usuario } = require("../models");
const bcrypt = require("bcrypt");


const UsuarioController = {
    index: async (req, res)=>{
		let users = await Usuario.findAll();
		if(users !==  null){
			res.send(users);
		}else{
			res.send("Nao há usuários cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let user = await Usuario.findByPk(id);
		if(user !==  null){
			res.send(user);
		}else{
			res.send("user nao encontrado");
		}
    },
    delete: async (req, res) => {
		
		let id = req.params.id;
	
		const deletedUser = Usuario.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	},
    registroForm: (req,res) => {
        res.render('registroUsuario');
    },
    new: async (req,res) => {
        const { cpf,senha, ...data } = req.body;		
		
		let hash = bcrypt.hashSync(senha, 12);

		let [result] = await Usuario.findOrCreate({
			where: { cpf: cpf },
			defaults: { 
				senha: hash,	
				...data 
			}
		})
			
		if(result !==  null){
			return res.status(200).json(result);  
		}else{
			return res.status(400).json({ err });
		}
    },
    loginForm: (req,res) => {
        res.render('login');
    },
    logarForm: (req,res) => {

    }
}

module.exports = UsuarioController;