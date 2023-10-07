<?php
class ContactoModelo {


    public $id;
    public $nombres;
    public $apellidos;
    public $telefono;

    public function __construct($nombres, $apellidos, $telefono)
    {
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->telefono = $telefono;
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
            "mensaje" => $this->telefono
        ];
    }
}
