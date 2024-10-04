import { React, useEffect, useState } from 'react'
import Navbars from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Higher() {
    const [data, SetData] = useState([]);
    const [search,setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3008/Fruit_importer').then(resp => resp.json()).then(json => { console.log(json); SetData(json) })
    }, []);

    const Delete = (id) =>{
        fetch(`http://localhost:3008/Fruit_importer/${id}`,{method:"DELETE"}); 
    }
    return (
        <div>
            <Navbars />
            <br />
            <br />
            <br />
            <br />
            <br />
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='w-75 mx-auto form-control mt-5 mb-5' placeholder='search...' />
            <Row>
                {
                    data.filter((x)=>{
                        if(search===''){
                            return x;
                        }else{
                            return x.name.toLowerCase().includes(search.toLowerCase());
                        }
                    }).map((x) => (
                        <Col>
                        <div key={x.id}>
                                <div className='card mt-5 mb-5' style={{ width: "18rem" }}>
                                    <img src={x.image} className='card-img-top' alt="data-image" />
                                    <div className='card-body'>
                                        <div className='card-title'>
                                            <h3>{x.name}</h3>
                                            <h3>{x.production}</h3>
                                            <h3>{x.price}</h3>
                                        </div>
                                    </div>
                                    <button onClick={()=>{Delete(x.id)}} className='btn btn-primary'>Delete Data</button>
                                </div>
                        </div>
                        </Col>
                    ))
                }
            </Row>

        </div >
    )
}
