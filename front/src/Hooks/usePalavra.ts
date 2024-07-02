import { useState } from "react";
import animais from "../mock.json";

export function usePalavra() {
  const [palavra, setPalavra] = useState<string>("");
  const [tema, setTema] = useState<string>("");

  async function palavraDia() {
    try {
      let palavras: { palavras: { palavra: string; dica: string }[] } = animais;
      const indiceAleatorio = Math.floor(Math.random() * palavras.palavras.length);

      // const { data } = await axios.get("http://62.72.11.161:7011/");
      const atual = palavras.palavras[indiceAleatorio];

      setPalavra(atual.palavra);
      setTema(atual.dica);
    } catch (e) {}
  }

  return {
    palavraDia,
    palavra,
    tema,
  };
}
