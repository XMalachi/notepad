import React, { useState } from 'react'


const GlobalContext = React.createContext();

const Provider  = (props)  => {
    const [state, setState] = useState({
        addnoteform: false,
        updatenoteform:false,
        welcomeNote: true,
        notes: false,
        textContents: {
            id: 0,
            date: new Date().toLocaleString(),
            title: '',
            textarea: '',
            favourite: false,
            liked: false,
        },
        cards: [],
        addedfavourite: false,
        addedlikes: false,
        displaytheFavourites: false,
    })

    const [updateNote, setUpdateNote] = useState({
        id: '',
        title: '',
        textarea: '',
    },)
    const [favourites, setfavourites] = useState([])
    const [likes, setlikes] = useState([])
    

    // useEffect(()=> {
    //     backToHomeHandler()
    // }, [])

    // console.log('from another', state.textsContents)
    const displayForm = () =>  {
            setState({
                ...state, 
                addnoteform: true,
                updatenoteform:false,
                welcomeNote: false,
                notes: false,
                displaytheFavourites: false,
            })
        // console.log('after',state.addnoteform)
    }

    const displayupdateform = (id) => {
        const copy = [...state.cards]

        const item = copy.find(i => i.id === id)
        // state.updatetextContents= item
        console.log(state.updatetextContents)
        setUpdateNote(item)
        setState({
            ...state, 
            updatenoteform:true,
            addnoteform: false,
            welcomeNote: false,
            notes: false,
            displaytheFavourites: false,
        })
    }

    // to go back to notes anytime you want

    const gotoNotes = () => {
        setState({
            ...state,
            addnoteform: false,
            updatenoteform:false,
            welcomeNote: false,
            notes: true,
            displaytheFavourites: false,
        })
    }
    const onChangeHandler = (e) => {
        const {name, value, className} = e.target

        if(className === "update" ){
            console.log('entered updaaatea')
            console.log(updateNote,)
            console.log('name', name)
            setUpdateNote({
                ...updateNote, [name]:value
            })
        }

        setState({...state, textContents: {...state.textContents, [name]: value}})
        console.log('from change', state)
    }


    const saveHandler = () => {
        
        state.cards.push(state.textContents)
        // console.log('cardsCopy', state.cards)
        
        setState({
            ...state, 
            textContents: {...state.textContents, textarea: '', title: '', id: state.textContents.id + 1},
            addnoteform: false,
            updatenoteform:false,
            welcomeNote: false,
            notes: true,
            displaytheFavourites: false,
        })

    
    }

    const deleteHandler = (id) => {
        const confirm = window.confirm('Are you sure Your want to delete note?')
        if(confirm){
            const copy = [...state.cards]
            const index = copy.filter(item => item.id !== id)
            console.log(index)
            
            // console.log('copy',copy)
            setState({
                ...state, 
                cards:index
            })
        }else{
            setState({
                ...state, 
                cards:state.cards
            })
        }
        
    }

    const cancelHandler = () => {
        if (state.cards.length > 0){
            setState({
                ...state,
                addnoteform: false,
                updatenoteform:false,
                welcomeNote: false,
                notes: true,
                
            })
        }else{
            setState({
                ...state,
                addnoteform: false,
                updatenoteform:false,
                welcomeNote: true,
                notes: false,
            })
        }
        
    }

    const updateHandler = (id) => {
        const copy = [...state.cards]
        const index = copy.indexOf(copy.find(copied => copied.id === id))

        let itemToBeUpdated = copy[index]
        itemToBeUpdated.title = updateNote.title
        itemToBeUpdated.textarea =  updateNote.textarea

        console.log('item to be updtated',itemToBeUpdated)
        setState({
            ...state, cards:copy, textContents: {...state.textContents, textarea: '', title: '', id: state.textContents.id + 1},
            notes: true,
            updatenoteform: false,
            displaytheFavourites: false,
        })
        
    }

    const truncatetwenty = (text) => {
        let cutWord = text.substr(20)
        if(text.length > 20){
            let replaced = text.replace(cutWord, '...')
            return replaced 
        }else{
            return text
        }
        
        
    }

    const truncatethirty = (text) => {
        let cutWord = text.substr(30)
        if(text.length > 30){
            let replaced = text.replace(cutWord, '...')
            return replaced 
        }else{
            return text
        }
        
    }

    // add to favourite 
    const favouriteHandler = (id) => {
        const copy = [...state.cards]
        let card = copy.find(item => item.id === id)
        card.favourite = !card.favourite;
        setState({
            ...state,
            cards: copy,
        })
        let isPresent = favourites.find(fav => fav.id === card.id)

        if(!isPresent){
            setfavourites([...favourites, card])
            setState({
                ...state,
                addedfavourite: true,
            })
        }else{
            let confirm = window.confirm('Remove from favourites?')

            if(confirm){
                let thefavourites = favourites.filter(filt => filt.id !== card.id) 
                setfavourites(thefavourites)
                setState({
                    ...state,
                    addedfavourite: false,
                })
            }
            
        }
   
    }
    console.log('my fgavourites',favourites)
    console.log('cards', state.cards)

    // to display favourites

    const displayFavourites = () => {
        setState({
            ...state,
            displaytheFavourites: true,
            addnoteform: false,
            updatenoteform:false,
            welcomeNote: false,
            notes: false,
            addedfavourite: false,
        
        })
    }

    const likeHandler = (id) => {
        const copy = [...state.cards]
        let card = copy.find(item => item.id === id)
        card.liked = !card.liked;
        setState({
            ...state,
            cards: copy,
        })
        let isliked = likes.find(like => like.id === card.id)

        if(!isliked){
            setlikes([...likes, card])
            setState({
                ...state,
                addedlikes: true,
            })
        }else{
            
                let theliked = likes.filter(filt => filt.id !== card.id) 
                setfavourites(theliked)
                setState({
                    ...state,
                    addedlikes: false,
                })
            
        }
    }

    return (
        <GlobalContext.Provider value={{
            ...state,
            updateNote,
            displayForm, 
            onChangeHandler,
            gotoNotes,
            saveHandler,
            deleteHandler,
            cancelHandler,

            updateHandler,
            displayupdateform,

            truncatetwenty,
            truncatethirty,

            favouriteHandler,
            favourites,
            displayFavourites,

            likeHandler,
 
        }}>
        {props.children}

        </GlobalContext.Provider>
    )

}

const Consumer = GlobalContext.Consumer;

export {Provider, Consumer} 
export default GlobalContext