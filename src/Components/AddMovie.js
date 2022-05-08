import React, {useContext} from 'react'
import { useState } from 'react/cjs/react.development'
import { MovieContext } from '../MovieContext'

const AddMovie = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value) 
    }

    const AddMovie = e => {
        e.preventDefault()
        setMovies(previousMovies =>[...previousMovies,{name:name, price:price}])
    }
    return (
        <form onSubmit={AddMovie}>
            <input type="type" name="name" value={name} onChange={updateName}/>
            <input type="type" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie
