import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Palavra } from "./Components/Palavra";
import { Teclado } from "./Components/Teclado";
import { usePalavra } from "./Hooks/usePalavra";

function App() {
  const [letraAtual, setLetraAtual] = useState("");
  const [vidas, setVidas] = useState(5);
  const [acertou, setAcertou] = useState(false);
  const { palavraDia, palavra, tema } = usePalavra();
  const [keyDeReinicio, setKeyDeReinicio] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);

  useEffect(() => {
    palavraDia();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
        <div>
          {vidas === 0 && <h1>PERDEU!! A palavra era {palavra}</h1>}
          {acertou && <h1>ACERTOU!! A palavra era {palavra}</h1>}
          <h2 className="mb-2">
            Dica: {tema} - Vidas: {vidas}
          </h2>

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
      </Row>
    </Container>
  );
}

export default App;
