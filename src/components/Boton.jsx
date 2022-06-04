import React from "react";
import "../styles/boton.css";

function Boton(props) {
	const esOperador = (valor) => {
		return isNaN(valor) && valor !== "." && valor !== "="; //si no es numero
	};

	return (
		<div
			className={`boton-contenedor ${
				esOperador(props.children) ? "operador" : ""
			}`.trimEnd()}
			onClick={() => props.manejarClick(props.children)} //se espera una funcion que devuelva el props.children
		>
			{props.children}
		</div>
	);
}

export default Boton;
