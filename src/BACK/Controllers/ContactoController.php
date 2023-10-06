<?php
include "../Modelos/ContactoModelo.php";
class ContactoController {

    public function guardar(array $informacion)
    {

        //validacion
        if(empty($informacion['mensaje'])) {
            return $this->responderComoJSON(
                [
                "mensaje_error" => "Hace falta que indique el mensaje"              
                ]
                ,400); 
        }
    

        $contactoModelo = new ContactoModelo(
            $informacion['nombres'],
            $informacion['apellidos'],
            $informacion['mensaje']
        );

        $contactoModeloCreadoEnDB = $this->guardarEnDB($contactoModelo);
        
        return $this->responderComoJSON([
                "mensaje" => "El contacto fue guardado con exito",
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
        
        $id = random_int(1,1000);
        $contactoModelo->setID($id);
        $contactoArray = $contactoModelo->toArray();
        $contactosJSON = json_encode($contactoArray);
        file_put_contents("../db/db.json",$contactosJSON);        
        return $contactoModelo;
    }
}