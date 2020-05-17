'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('usuario', 
  [
    {
        "nome": "Priscila Vanessa Baptista",
        "cpf": "841.392.858-34",
        "email": "priscilavanessabaptista_@i9pneus.com.br",
        "senha": "BCtW86LeGU",
        "celular": "(11) 98392-5156"
      },
      {
        "nome": "Rita Melissa Agatha Almeida",
        "cpf": "536.829.348-80",
        "email": "ritamelissaagathaalmeida__ritamelissaagathaalmeida@puenteimoveis.com.br",
        "senha": "8m9i6maMgz",
        "celular": "(11) 99139-8867"
      },
      {
        "nome": "Clarice Emily Liz Nogueira",
        "cpf": "028.068.948-91",
        "email": "cclariceemilyliznogueira@esctech.com.br",
        "senha": "08E4j2zASf",
        "celular": "(11) 99368-3872"
      },
      {
        "nome": "Daiane Antonella Mariah Monteiro",
        "cpf": "112.470.758-18",
        "email": "daianeantonellamariahmonteiro__daianeantonellamariahmonteiro@balaiofilmes.com.br",
        "senha": "jCusIAL0D7",
        "celular": "(11) 99671-9294"
      },
      {
        "nome": "Ryan Luís Heitor Pinto",
        "cpf": "279.850.878-93",
        "email": "ryanluisheitorpinto_@oana.com.br",
        "senha": "RYbiIUbpZO",
        "celular": "(11) 98822-4222"
      }
  ], {}),

down: (queryInterface) => queryInterface.bulkDelete('usuario', null, {}),
};