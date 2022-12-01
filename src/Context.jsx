import React from 'react'
const Context = React.createContext()

function ContextProvider({children}){

    const [watchList, setWatchList] = React.useState([])
    // let key = 'bfa62bd9'

    // function selectedMovie(id){
    //     fetch('https://www.omdbapi.com/?apikey='+key+'&i='+id)
    //     .then((response) => response.json())
    //     .then((data) => {console.log(data)
    //         setWatchList(data)
    //     });
    //    }
   
    function addToWatchList(item){
            setWatchList(function(prevState){
                return [...prevState, item]
            })
    }
       




    return (
        <Context.Provider value={{addToWatchList, watchList}}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}