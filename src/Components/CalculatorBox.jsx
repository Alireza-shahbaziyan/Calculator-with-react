import React from 'react'
import Button from './Buttons/Button'
const CalculatorBox = () => {
    return (
        <>
            <div class="mockup-phone border-success">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        {/* App */}
                        <div className='w-full h-1/4 p-4 flex items-center'>128+38</div>
                        <div className='w-full h-3/4 border-t-2 border-gray-400 flex flex-col pt-4'>
                            <div className='w-full h-1/5 flex justify-around'>
                                <Button value="test"/>
                                <Button value="tt"/>
                                <Button value="test"/>
                                <Button value="test"/>
                            </div>
                            <div className='w-full h-1/5 flex justify-around'>
                                <Button value="test"/>
                                <Button value="test"/>
                                <Button value="test"/>
                                <Button value="test"/>
                            </div>
                            <div className='w-full h-1/5 flex justify-around'>
                                <Button value="9"/>
                                <Button value="test"/>
                                <Button value="test"/>
                                <Button value="test"/>
                            </div>
                            <div className='w-full h-1/5 flex justify-around'>
                                <Button value="5"/>
                                <Button value="6"/>
                                <Button value="7"/>
                                <Button value="8"/>
                            </div>
                            <div className='w-full h-1/5 flex justify-around'>
                                <Button value="1"/>
                                <Button value="2"/>
                                <Button value="3"/>
                                <Button value="4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculatorBox