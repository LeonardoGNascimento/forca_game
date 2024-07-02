import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Palavra } from "./Components/Palavra";
import { Teclado } from "./Components/Teclado";
import { usePalavra } from "./Hooks/usePalavra";
import { Button } from "./components/ui/button";

function App() {
  const [letraAtual, setLetraAtual] = useState("");
  const [vidas, setVidas] = useState(5);
  const [acertou, setAcertou] = useState(false);
  const { palavraDia, palavra, tema } = usePalavra();
  const [keyDeReinicio, setKeyDeReinicio] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);

  function makeVida() {
    const resultado = [];
    for (let i = 0; i < vidas; i++) {
      resultado.push(i);
    }

    return resultado;
  }

  useEffect(() => {
    palavraDia();
  }, []);

  return (
    <div className="">
      <div className="grid h-screen justify-center items-center text-center">
        <div>
          <h2>Dica: {tema}</h2>
          <h3 className="flex justify-center gap-2 text-[red]">
            {makeVida().map(() => (
              <FaHeart />
            ))}
          </h3>
        </div>

        {vidas === 0 && <h1>PERDEU!! A palavra era {palavra}</h1>}
        {acertou && <h1>ACERTOU!! A palavra era {palavra}</h1>}

        {!reiniciar && palavra && vidas > 0 && (
          <>
            {!acertou || vidas > 0 ? (
              <Palavra
                key={keyDeReinicio + 1}
                letraAtual={letraAtual}
                palavra={palavra?.split("")}
                callBackAcerto={() => {
                  setReiniciar(true);
                  setAcertou(true);
                }}
                acertou={acertou}
              />
            ) : (
              ""
            )}

            {!acertou || vidas > 0 ? (
              <Teclado
                key={keyDeReinicio}
                setLetraAtual={setLetraAtual}
                palavra={palavra?.split("")}
                setVidas={setVidas}
                acertou={acertou}
                disable={vidas === 0}
              />
            ) : (
              ""
            )}
          </>
        )}
        {acertou || vidas === 0 ? (
          <Button
            onClick={() => {
              setKeyDeReinicio((item) => item + 1);
              setVidas(5);
              palavraDia();
              setAcertou(false);
              setLetraAtual("");
              setReiniciar(false);
            }}
          >
            Próxima
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
