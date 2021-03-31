import {useState} from 'react'
import {MainLayout} from '../layouts/MainLayout'

export default function HomePage() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <MainLayout title='Home Page'>
        <div>
            <h1>Home Page</h1>
            <h2>Number: {count}</h2>
            <h2>Number: {count2} </h2>
            <hr></hr>
            <h2>Result: {result} </h2>

            <button className='btn btn-success' onClick={() => setCount(count + 1)}>Add</button>
            <button className='btn btn-warning' onClick={() => setResult(count + count2)}>Add Counts</button>
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Delete</button>
        </div> 
        </MainLayout>
    )
}

