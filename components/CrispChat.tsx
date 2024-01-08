"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

function CrispChat() {
	useEffect(() => {
		Crisp.configure("c476dfde-cc4e-4a02-b106-1cb42ec92f27")
	}, []);
	return ( 
		null
	 );
}

export default CrispChat;