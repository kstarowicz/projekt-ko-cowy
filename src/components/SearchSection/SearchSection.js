import React, {useEffect, useState} from "react";
import "./SerchSection.scss";

export default function SearchSection() {
    const [equipmentList, setEquipmentList] = useState([])
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {
        setFiltered(equipmentList.filter(eq => {
            console.log(eq);
            return eq.equipmentSerialNumber.includes(search)
        }))
    }, [search])
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const getEquipment = async () => {
        try {
            const res = await fetch("http://localhost:3000/number");
            const data = await res.json();
            setEquipmentList(data);
            setFiltered(data);
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
        getEquipment();
    },[]);
    const ad = async (id) => {
        console.log("szukaj", id);
        try {
            const res = await fetch("http://localhost:3000/number", {method: "SEARCH"});
            console.log(res);
            if (res.ok) {
                getEquipment();
            }
        }catch (error){
            throw new Error(error)
        }
    };

    useEffect(() =>{
    },[]);
    const Delete = async (id) => {
        console.log("usuń", id);
        try {
            const res =await fetch ("http://localhost:3000/number"+id, {method: "Delete"});
            console.log(res);
            if (res.ok) {
                getEquipment();
            }
        }catch (error) {
            throw new Error(error)
        }
    };



    return (
        <div className = "container container-search">
            <input className="input-search" type="text" value={search} onChange={handleSearch}/>
            <ul className="list-search">
                {filtered.length !== 0 ? (
                    filtered.map(({id, equipmentCategory, equipmentBrand, equipmentModel, equipmentSerialNumber, equipmentCheckbox, equipmentCheckbox1}) => {
                        return (
                            <li key={id} className="search-section-serial-number">
                                <div>
                                    {equipmentCategory}<br/>
                                    {equipmentBrand}<br/>
                                    {equipmentModel}<br/>
                                    {equipmentSerialNumber}<br/>
                                    {equipmentCheckbox}<br/>
                                    {equipmentCheckbox1}<br/>
                                </div>
                                <div>
                                    <button className="btn-search-section btn-remove-check-section" onClick={()=> Delete(id)}>
                                        usuń
                                    </button>
                                </div>
                                <hr/>
                            </li>
                    );
                })
                    ):(
                        <li>loading...</li>
                )}
            </ul>
        </div>
    );
}