const REPLICATE_MODEL_VERSION =
  "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa";
  

const startGeneration =async (prompt) => {
    const response=await fetch(`${process.env.REPLICATE_API_URL}/predictions`,{
        method:"POST",
        headers:{
            Authorization:`Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            version:REPLICATE_MODEL_VERSION,
            input:{prompt},
        }),
        
    })
    return response.json();
}

const getGeneration = async(url) => {
    const result=await fetch(url,{
        headers:{
            Authorization:`Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type":"application/json",
        }
    })
    return result.json();
}


export default async function handler (request,response) {
    const {prompt}=request.body;
    // console.log("request",request.body)
    if(!prompt){
        response.status(400).json("No prompt provided")
    }
    const predictions=await startGeneration(prompt)
    // console.log("predictions",predictions)
    let predictionsGets=predictions.results.map((item)=>item.urls.get)
    console.log("predictionsGets",predictionsGets)
    
    
    
    
    
    let generatedImages;
    while(!generatedImages){

      

           const results= await Promise.all( predictionsGets.map( async(element) => {
                const elementResult=  await getGeneration(element)
                // console.log("elementResult",elementResult);
                return elementResult
            }))
        
        // console.log("Results*******",results)

     
       
       if(results.every(item=>item.status==="succeeded")){
        
        generatedImages=results.map((item)=>item.output[0]);
        console.log("generatedImages",generatedImages)
       } else if(results.some(item=>item.status==="failed")){
        break;
       }else{
        await new Promise((resolve)=>setTimeout(resolve,1000))
       }
    }
    response.status(200).json(generatedImages ? generatedImages : "Failed to create the image" )
}

