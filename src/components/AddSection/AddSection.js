import React, {useState} from "react";
import "./AddSection.scss";

export default function Add() {
    const [equipmentCategory, setEquipmentCategory] = useState("");//rodzaj urządzenia
    const [equipmentBrand, setEquipmentBrand] = useState("");//marka urządzenia
    const [equipmentModel, setEquipmentModel] = useState("");// model urządzenia
    const {equipmentSerialNumber, setEquipmentSerialNumber} = useState("");//numer seryjny
    const {equipmentCheckbox, setEquipmentCheckbox} = useState(false);// skradziony checkbox
    const {equipmentCheckbox1, setEquipmentCheckbox1} = useState(false);// zgubiony checkbox

    const handleSubmit = (e) => {
        e.preventDefault();
        const save = async () => {
            const res = await fetch("http://localhost:3000/number",{
                method: "POST",
                body: JSON.stringify({
                    equipmentCategory,
                    equipmentBrand,
                    equipmentModel,
                    equipmentSerialNumber,
                    equipmentCheckbox: equipmentCheckbox ? "skradziono" : " nie skradziony",//warunek na kradzież
                    equipmentCheckbox1: equipmentCheckbox1 ? "zgubiono" : " nie zgubiony" //warunek na zgubienie
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);
        }
        save()
    };

    const labelStyle = {display: "block"};

    return (
        <form onSubmit={handleSubmit}>
            <div className="container container-add">
                <label style={labelStyle}>
                    Rodzaj urządzenia
                    <input
                        className="input input-add input-category"
                        value={equipmentCategory}
                        onChange={(e) => setEquipmentCategory(e.target.value)}
                        type="text"
                        id="equipmentCategory"
                        />
                </label>
                <label style={labelStyle}>
                    Marka
                    <input
                        className="input input-add input-brand"
                        value={equipmentBrand}
                        onChange={(e) => setEquipmentBrand(e.target.value)}
                        type="text"
                        id="equipmentBrand"
                        />
                </label>
                <label style={labelStyle}>
                    Model urządzenia
                    <input
                        className="input input-add input-model"
                        value={equipmentModel}
                        onChange={(e) => setEquipmentModel(e.target.value)}
                        type="text"
                        id="equipmentModel"
                    />
                </label>
                <label style={labelStyle}>
                    Numer seryjny urządzenia
                    <input
                        className="input input-add input-serial-number"
                        value={equipmentSerialNumber}
                        onChange={(e) => setEquipmentSerialNumber(e.target.value)}
                        type="text"
                        id="equipmentSerialNumber"
                    />
                </label>
                <label>
                    Zaznacz jeśli chcesz zgłosić kradzież
                    <input
                        className="checkbox checkbox-stolen"
                        value={equipmentCheckbox}
                        onChange={(e) => setEquipmentCheckbox(e.target.checked)}
                        type="checkbox"
                        id="equipmentCheckbox"
                    />
                </label>
                <label>
                    Zaznacz jeśli chcesz zgłosić zgubienie
                    <input className="checkbox checkbox-lost"
                           value={equipmentCheckbox1}
                           onChange={(e) => setEquipmentCheckbox1(e.target.checked)}
                           type="checkbox"
                           id="equipmentCheckbox1"
                    />
                </label>
                <div className="btn btn-add-section">
                    <button className="btn btn-add-equipment">Dodaj</button>
                </div>
            </div>
        </form>
    );
}



