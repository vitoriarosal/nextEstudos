'use client'

import Pagina from "../components/Pagina"

export default function Objetos() {

 const carros = [{ Marca: 'GM', modelo: 'corsa', cor: 'rosa', foto: '' },
 { Marca: 'GM', modelo: 'celta', cor: 'rosa', foto: '' },
 { Marca: 'GM', modelo: 'ferrari', cor: 'azul', foto: '' },
 { Marca: 'GM', modelo: 'fusca', cor: 'prata', foto: '' },
 { Marca: 'GM', modelo: 'cobalt', cor: 'branco', foto: '' }

 ]
 const carros = { 'corsa', 'celta', 'ferrari', 'fusca', 'cobalt'}

 return (
 <Pagina titulo="Obejetos">
 {carros.map(item => (
 <p>{item}</p>
 ))}
 <ul>

 {carros.map(item => (
 <p>{item}</p>
 ))}
 </ul>
 </Pagina>

 )
}