<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept");
header("Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Expose-Header: *");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}


$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data) {

    echo json_encode(array('message' => 'Datos recibidos y procesados correctamente.'));
} else {
    http_response_code(400);
    echo json_encode(array('error' => 'Error al procesar los datos.'));
}
