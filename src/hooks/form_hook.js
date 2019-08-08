import React, {useState,useCallback} from  'react'


export const useInput =(initalValue)=>{
   const [value,setValue] = useState(initalValue)

   let onChange = useCallback(event=>{
     setValue(event.currentTarget.value)
   },[])

   return [value,{value,onChange}]

}
