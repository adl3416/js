import { prettyFormat } from '@testing-library/react';
import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {GrPowerReset} from "react-icons/gr";
 

const Conunter = () => { //
    const [counter, setcounter] = useState(0)

    const handleClickt= (val)=>{   // sayac sifirin altina inmesini engelliyorr
     if(val<0) val=0;
     setcounter(val)

     if(val>100) val=100;  // en fazla 100 e kadar cikar
     setcounter(val)
    }
    


  return (
     <ButtonGroup aria-label="Basic example">

     {/* <Button variant="info" onClick={()=>setcounter(prev=>prev+1)}> <AiOutlinePlusCircle/> </Button>  sadece degere 1 eklemk istiyorsak bu yontem tavsiye edilir yada onClick={()=>setcounter((prev)=> prev<=0 ? 0 : prev -1)}  */}

     <Button variant="info" onClick={()=>handleClickt(counter+1)}> <AiOutlinePlusCircle/> </Button>
     <Button variant="light" disabled >{counter}</Button>
     <Button variant="warning" onClick={()=> handleClickt(counter-1)} disabled={counter===0}><AiOutlineMinusCircle/></Button>
     <Button variant="danger" onClick={()=> handleClickt(0)} disabled={counter===0}> <GrPowerReset/> </Button>
   </ButtonGroup>
  )
}

export default Conunter