//Conexão com a base de dados
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({ 
        host : 'localhost' , 
        user : 'root' , 
        database : 'Sua base de dados',
        password: 'Senha de usuario'
      });
    console.log("Conectado ao SQL!");
    global.connection = connection;
    return connection;
}
//Listagem de todos os dados
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM bancos;');
//   console.log(rows);
    return rows;
}

//Listagem de um dado específico
async function selectCustomer(codigo){
    const conn = await connect();
    const sql = 'select codigo, instituicao from bancos where codigo=?;';
    const [rows] = await conn.query(sql, codigo);
//    console.log(rows);
    return rows;
}

module.exports = {selectCustomers, selectCustomer}



