import React,{ useState, useEffect} from 'react';

const useFetch =(url) =>{
    const [ blogs, setBlogs] = useState();
    const [ result, setResult] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        const AbortCont = new AbortController();

        setTimeout(()=>{
            fetch(url,{
            method: "GET",
            signal: AbortCont.signal
        })
        .then((res) =>{
            return res.json();
        })
        .then((data) =>{
            setBlogs(data);
            setLoading(false)
        })
        .catch((err) =>{
            if(err.name === "AbortError"){
                console.log(err.name);
            }  else{
                console.log("error");
            }
        })
        },1000)
        return () => AbortCont.abort();
    },[])
    return { blogs, loading};
}
export default useFetch;