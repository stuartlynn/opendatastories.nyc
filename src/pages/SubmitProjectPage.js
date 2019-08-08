import React, {useState} from 'react'
import {useInput} from '../hooks/form_hook'

export default function SubmitProjectPage(){
   const [project_title, name_input]  = useInput("")
   const [submiter, submiter_input]  = useInput("")
   const [description, description_input]  = useInput("")
   const [url, url_input]  = useInput("")

   const [imagePreviewURL, setImagePreviewURL] = useState(null)


   const onSubmit = (data)=>{
      console.log('Data is data ', data)
   }

   return(
     <div>
         <form onSubmit={onSubmit}>
             {imagePreviewURL && <img src={ `http://localhost:5000/screenshot?url=${url}`}/> }
             <input placeholder='Project Title' {...name_input} />
             <input placeholder='Submitor' {...submiter_input} />
             <input placeholder='description' {...description_input} />
             <input placeholder='url' {...url_input} onBlur={() => setImagePreviewURL(url)}/>
             <input type='submit' value="Submit" />

             <div>
                 <h3>Datasets</h3>
             </div>
         </form>
     </div>
   
   )
}
