const Aluno = require("../models/Aluno");
const bcrypt = require("bcryptjs");
const aluno = require("./aluno");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = {
    async store(req,res){
        const { email, senha } = req.body;

        //verificar se o aluno existe e se a senha está correta
        Aluno.findOne({
            where: {
                email,

            }
        });

        //se não existir retorno erro
        if(!Aluno && !bcrypt.compare(senha, Aluno.senha)){
            return res.status("403").send({erro: "Usuário e/ou senha inválidos"});
        }

        const token = jwt.sign({ alunoId: aluno.id }, authConfig.secret)

        //se existir e a senha estiver correta retorna OK com o token
        res.status("201").send({
            aluno: {
                alunoId: aluno.id,
                nome: aluno.nome,
                ra: aluno.ra
            },
            token
        });
    }
}