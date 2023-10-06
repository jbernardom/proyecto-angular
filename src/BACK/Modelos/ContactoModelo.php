<?php
class ContactoModelo {


    private $id;
    private $nombres;
    private $apellidos;
    private $mensaje;

    public function __construct($nombres, $apellidos, $mensaje)
    {
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->mensaje = $mensaje;
    }

    public function setID($id)
    {
        $this->id = $id;
    }
   
    public function toArray()
    {
        return [
            "id" => $this->id,
            "nombres" => $this->nombres,
            "apellidos" => $this->apellidos,
            "mensaje" => $this->mensaje
        ]; 
    }
}