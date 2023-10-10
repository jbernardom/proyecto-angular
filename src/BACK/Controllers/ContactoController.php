<?php
include "../Modelos/ContactoModelo.php";

class ContactoController {

    public function guardar(array $informacion)
    {
        // Validación
        if (empty($informacion['mensaje'])) {
            return $this->responderComoJSON(
                [
                    "mensaje_error" => "Hace falta que indique el mensaje"
                ],
                400
            );
        }

        $contactoModelo = new ContactoModelo(
            $informacion['nombres'],
            $informacion['apellidos'],
            $informacion['telefono']
        );

        $contactoModeloCreadoEnDB = $this->guardarEnDB($contactoModelo);

        return $this->responderComoJSON([
            "mensaje" => "El contacto fue guardado con éxito",
            "contacto" => $contactoModeloCreadoEnDB->toArray()
        ]);
    }

    private function responderComoJSON(array $dataResponder, $statusCode = 200)
    {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($dataResponder);
    }

    private function guardarEnDB(ContactoModelo $contactoModelo)
    {
        try {
            $conexion = new PDO('mysql:host=127.0.0.1;dbname=mi_cerveza', 'root', 'ba+260101');

            $queryIn = "INSERT INTO contactos (nombres, apellidos, telefono) VALUES(:nombres, :apellidos, :telefono)";

            $smt = $conexion->prepare($queryIn);

            $smt->bindParam(':nombres', $contactoModelo->nombres);
            $smt->bindParam(':apellidos', $contactoModelo->apellidos);
            $smt->bindParam(':telefono', $contactoModelo->telefono);
            $smt->execute();


            $contactoModelo->setID($conexion->lastInsertId());

            return $contactoModelo;
        } catch (PDOException $e) {
            return null;
        }
    }
}
