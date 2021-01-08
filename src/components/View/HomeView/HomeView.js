import Input from "../../UIComponents/Input/Input";
import { useState } from "react";

export default function HomeView() {
    const [height, setHeight] = useState('')
    const handleHeightChange = e => setHeight(e.currentTarget.value)
    const [desiredWeight, setDesiredWeight] = useState('')
    const handleDesiredWeightChange = e => setDesiredWeight(e.currentTarget.value)
    const [age, setAge] = useState(0)
    const handleAgeChange = e => setAge(e.currentTarget.value)
    const [currentWeight, setCurrentWeight] = useState('')
    const handleCurrentWeightChange = e => setCurrentWeight(e.currentTarget.value)
    const [radio, setRadio] = useState('')
    const handleRadioChange = e => setRadio(e.target.value)
    return (
        <>
            <h1>Просчитай свою суточную норму калорий прямо сейчас</h1>
            <form>
                <Input type='text' onChange={handleHeightChange} value={height} placeholder="Height" />
                <Input type='text' onChange={handleDesiredWeightChange} value={desiredWeight} placeholder="Desired Weight" />
                <Input type='number' onChange={handleAgeChange} value={age} placeholder="Age" />
                <Input type='text' onChange={handleCurrentWeightChange} value={currentWeight} placeholder="Current Weight" />
                <label htmlFor="">
                    Blood
                    <input onChange={handleRadioChange} type="radio" value='1' checked={radio === '1'} /> 1
                    <input onChange={handleRadioChange} type="radio" value='2' checked={radio === '2'} /> 2
                    <input onChange={handleRadioChange} type="radio" value='3' checked={radio === '3'} /> 3
                    <input onChange={handleRadioChange} type="radio" value='4' checked={radio === '4'} /> 4

</label>
            </form>
        </>
    )
}
