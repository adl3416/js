import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffect = (id) => {
  console.log("USEEFFECT");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  console.log(
    "bu satir render ve  re-render durumlarinda ve alltaki return kisim render edilmeden önce calistirilir"
  );

  useEffect(() => {
    //burasi sadece Api gibi ihtiyac durumlarinda kullanilir
    console.log(`MOUNTING: Bu satir sadece render durumunda calisir
    Ancak re-render larda calismaz
      `);

    return () => {
      console.log(`
        UNMOUNTING: Bu bölüm component hafifadan atilmadan hemen önce calistirilir `);
    };
  }, []);

  useEffect(() => {
    //useEffect alttaki return dan sonra calisir.
    console.log(`
    Updating:  Bu satir  render ve re-render durumunda  ve 
    alttaki return kismi rebder edildikten sonra calistirilir
    Bu  useEffect özellikle alttaki elementlere useRef ile eismek icin kullanilir
    `);
  });

  useEffect(() => {
    //burasi sadece alt verdigimiz message veya id degisirse caliscak
    console.log(` UPDATING: Bu bölümdeki kodlar alt tarafdaki yazilan dependecylerin
    (message,id) degismesi durumunda calisir`);
  }, [message, id, value]);

  return (
    <div>
      <div>
        <input
          placeholder="test"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />{" "}
        {message} - {error}{" "}
      </div>
      <Button variant="info" onClick={() => setMessage(value)}>
        {" "}
        Set Message{" "}
      </Button>
      <Button variant="danger" onClick={() => setError("Some errors")}>
        {" "}
        Throw Error{" "}
      </Button>
    </div>
  );
};

export default UseEffect;
