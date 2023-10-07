<?php
//capturar la informacion que viene del front
//$data = require_once './capturar_datos_api.php';

$data = [
  "nombre" => "Bernardo",
  "apellido" => "Martinez",
  "telefono" => "3254524"
];

if(is_array($data)) {
include "../Controllers/ContactoController.php";
$controlador = new ContactoController();
$controlador->guardar($data);

}

