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
                    <input type="radio" /> 1
                    <input type="radio" /> 2
                    <input type="radio" /> 3
                    <input type="radio" /> 4

</label>
            </form>
        </>
    )
}
