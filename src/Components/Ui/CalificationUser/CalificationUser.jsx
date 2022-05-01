import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconStar } from 'Assets/Icons/IconStar.svg'

import './CalificationUser.css'

export const CalificationUser = ({ value }) => {

    const [valueCal, setValueCal] = useState(0)

    useEffect(() => {
        const calcCalification = (val) => {
            return Math.round(val / 5 / 4)
        }
        setValueCal(calcCalification(value) + 1)
    },[value])

    return (
        <CalicationUserProfile value={valueCal}>
            <IconStar id='star' />
            <IconStar id='star' />
            <IconStar id='star' />
            <IconStar id='star' />
            <IconStar id='star' />
        </CalicationUserProfile>
    )
}

const CalicationUserProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    svg:nth-of-type(n+${props => props.value}){
        fill: #9b9b9b;
    }
`;