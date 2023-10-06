<?php
//capturar la informacion que viene del front
$data = require_once './capturar_datos_api.php';
include "../Controllers/ContactoController.php";
$controlador = new ContactoController();
$controlador->guardar($data);
